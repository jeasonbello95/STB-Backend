<?php
/**
 * search_replace_db.php
 *
 * Reemplaza el dominio anterior por el nuevo en TODAS las tablas de la base,
 * de forma segura con datos serializados de PHP (widgets, theme mods, etc.
 * que viven en wp_options / wp_postmeta).
 *
 * El dominio "anterior" se detecta solo desde wp_options (home / siteurl),
 * por lo que no hace falta pasarlo por argumento.
 *
 * Uso:
 *   php search_replace_db.php --db=local --new=stbacademy.site \
 *       [--host=127.0.0.1 --port=10005 --user=root --pass=root]
 *
 * Exit codes: 0 = ok (aunque no haya nada que reemplazar)
 *             1 = error de conexion o de ejecucion
 *             2 = parametros invalidos
 */

$opts = array();
foreach ($argv as $i => $a) {
    if ($i === 0) {
        continue;
    }
    if (preg_match('/^--([^=]+)=(.*)$/', $a, $m)) {
        $opts[$m[1]] = $m[2];
    }
}

function fail($msg) {
    fwrite(STDERR, "[search_replace_db] " . $msg . PHP_EOL);
    exit(1);
}

$host = isset($opts['host']) ? $opts['host'] : '127.0.0.1';
$port = isset($opts['port']) ? (int)$opts['port'] : 3306;
$user = isset($opts['user']) ? $opts['user'] : 'root';
$pass = isset($opts['pass']) ? $opts['pass'] : '';
$db   = isset($opts['db'])   ? $opts['db']   : '';
$new  = isset($opts['new'])  ? $opts['new']  : '';

if ($db === '')  fail('Falta --db');
if ($new === '') fail('Falta --new');

// Normalizar dominio nuevo: sin esquema, sin barra final, sin path.
$new = trim($new, '/');
if (strpos($new, '://') !== false) {
    $new = preg_replace('#^[a-z]+://#i', '', $new);
}
if ($pos = strpos($new, '/')) {
    $new = substr($new, 0, $pos);
}
$new = trim($new, '/');
if ($new === '') {
    fail('El dominio nuevo quedo vacio');
}

$mysqli = @mysqli_connect($host, $user, $pass, $db, $port);
if (!$mysqli) {
    fail('No se pudo conectar a MySQL: ' . mysqli_connect_error());
}
mysqli_set_charset($mysqli, 'utf8mb4');

// ---- Detectar dominio anterior desde wp_options ----
$old = '';
foreach (array('home', 'siteurl') as $opt) {
    $r = @mysqli_query($mysqli, "SELECT option_value FROM wp_options WHERE option_name = '$opt' LIMIT 1");
    if ($r && ($row = mysqli_fetch_row($r))) {
        if ($row[0] !== '') {
            $old = $row[0];
            break;
        }
    }
}
if ($old !== '') {
    $old = trim($old, '/');
    if (strpos($old, '://') !== false) {
        $old = preg_replace('#^[a-z]+://#i', '', $old);
    }
    if ($pos = strpos($old, '/')) {
        $old = substr($old, 0, $pos);
    }
    // quitar puerto (host:puerto)
    if (strpos($old, ':') !== false) {
        $old = explode(':', $old)[0];
    }
    $old = trim($old, '/');
}

if ($old === '') {
    echo "No se encontro un dominio anterior en wp_options; nada que reemplazar." . PHP_EOL;
    mysqli_close($mysqli);
    exit(0);
}
if (strcasecmp($old, $new) === 0) {
    echo "El dominio anterior (" . $old . ") ya coincide con el nuevo (" . $new . "); nada que reemplazar." . PHP_EOL;
    mysqli_close($mysqli);
    exit(0);
}

echo "Dominio anterior : " . $old . PHP_EOL;
echo "Dominio nuevo    : " . $new . PHP_EOL;

/**
 * Reemplaza el host viejo por el nuevo dentro de un string plano,
 * cubriendo http://, https://, URLs relativas de protocolo y el host "pelado".
 */
function apply_replace($value, $old, $new) {
    $out = str_replace('http://' . $old, 'http://' . $new, $value);
    $out = str_replace('https://' . $old, 'https://' . $new, $out);
    $out = str_replace('//' . $old, '//' . $new, $out);
    $out = str_replace($old, $new, $out);
    return $out;
}

/**
 * Reemplazo recursivo que respeta la estructura serializada de PHP:
 * si un string es data serializada, se deserializa, se reemplaza en
 * profundidad y se vuelve a serializar (las longitudes quedan correctas).
 */
function replace_recursive($from, $to, $data) {
    if (is_string($data)) {
        if (preg_match('/^[aOsibd]:\d+:/', $data)) {
            $un = @unserialize($data);
            if ($un !== false && !($un instanceof __PHP_Incomplete_Class)) {
                $rep = replace_recursive($from, $to, $un);
                return serialize($rep);
            }
        }
        return apply_replace($data, $from, $to);
    }
    if (is_array($data)) {
        $out = array();
        foreach ($data as $k => $v) {
            $nk = is_string($k) ? apply_replace($k, $from, $to) : $k;
            $out[$nk] = replace_recursive($from, $to, $v);
        }
        return $out;
    }
    if (is_object($data)) {
        $out = new stdClass();
        foreach ((array)$data as $k => $v) {
            $nk = is_string($k) ? apply_replace($k, $from, $to) : $k;
            $out->$nk = replace_recursive($from, $to, $v);
        }
        return $out;
    }
    return $data;
}

// ---- Descubrir tablas ----
$tables = array();
$res = mysqli_query($mysqli, 'SHOW TABLES');
if (!$res) {
    fail('No se pudieron listar las tablas: ' . mysqli_error($mysqli));
}
while ($row = mysqli_fetch_row($res)) {
    $tables[] = $row[0];
}
if (empty($tables)) {
    echo "La base " . $db . " no tiene tablas." . PHP_EOL;
    mysqli_close($mysqli);
    exit(0);
}

$esOld = mysqli_real_escape_string($mysqli, $old);
$esNew = mysqli_real_escape_string($mysqli, $new);

$totalRows = 0;
$totalTables = 0;

foreach ($tables as $table) {
    $cols = array();
    $pk = '';
    $res = mysqli_query($mysqli, "SHOW COLUMNS FROM `$table`");
    if (!$res) {
        continue;
    }
    while ($row = mysqli_fetch_assoc($res)) {
        $type = strtolower($row['Type']);
        if (strpos($type, 'char') !== false || strpos($type, 'text') !== false
            || strpos($type, 'enum') !== false || strpos($type, 'blob') !== false) {
            $cols[] = $row['Field'];
        }
        if ($pk === '' && $row['Key'] === 'PRI') {
            $pk = $row['Field'];
        }
    }
    if (empty($cols)) {
        continue;
    }

    // Sin clave primaria simple: reemplazo por SQL directo (poco comun en WP).
    // No cubre datos serializados en estas tablas, pero son casos raros.
    if ($pk === '') {
        foreach ($cols as $c) {
            mysqli_query($mysqli,
                "UPDATE `$table` SET `$c` = REPLACE(REPLACE(REPLACE(`$c`, 'http://$esOld', 'http://$esNew'), 'https://$esOld', 'https://$esNew'), '$esOld', '$esNew')"
            );
        }
        continue;
    }

    $colList = '`' . implode('`,`', $cols) . '`';
    $res = mysqli_query($mysqli, "SELECT `$pk`, $colList FROM `$table`");
    if (!$res) {
        continue;
    }

    $tableRows = 0;
    while ($row = mysqli_fetch_assoc($res)) {
        $changes = array();
        foreach ($cols as $c) {
            $v = $row[$c];
            if (!is_string($v)) {
                continue;
            }
            if (strpos($v, $old) === false) {
                continue;
            }
            $nv = replace_recursive($old, $new, $v);
            if ($nv !== $v) {
                $changes[$c] = $nv;
            }
        }
        if (empty($changes)) {
            continue;
        }
        $set = array();
        $types = '';
        $vals = array();
        foreach ($changes as $c => $nv) {
            $set[] = "`$c` = ?";
            $types .= 's';
            $vals[] = $nv;
        }
        $types .= 's';
        $vals[] = $row[$pk];
        $sql = "UPDATE `$table` SET " . implode(', ', $set) . " WHERE `$pk` = ?";
        $stmt = mysqli_prepare($mysqli, $sql);
        if ($stmt) {
            mysqli_stmt_bind_param($stmt, $types, ...$vals);
            mysqli_stmt_execute($stmt);
            mysqli_stmt_close($stmt);
            $tableRows++;
        }
    }
    if ($tableRows > 0) {
        $totalRows += $tableRows;
        $totalTables++;
        echo "  - $table: $tableRows fila(s) actualizada(s)" . PHP_EOL;
    }
}

echo "Listo. $totalRows fila(s) en $totalTables tabla(s) actualizadas." . PHP_EOL;
mysqli_close($mysqli);
exit(0);
