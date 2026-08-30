param(
    [Parameter(Mandatory = $true)]
    [string]$SiteName
)

$ErrorActionPreference = 'Stop'

function Write-Result {
    param([string]$Port, [string]$Bin, [string]$Domain)
    Write-Output ("PORT=" + $Port)
    Write-Output ("BIN=" + $Bin)
    Write-Output ("DOMAIN=" + $Domain)
}

$sitesPath = Join-Path $env:APPDATA 'Local\sites.json'
if (-not (Test-Path -LiteralPath $sitesPath)) {
    Write-Result '' '' ''
    exit 1
}

$sites = Get-Content -Raw -LiteralPath $sitesPath | ConvertFrom-Json
$site = $null
foreach ($p in $sites.PSObject.Properties) {
    if ($p.Value.name -eq $SiteName) { $site = $p.Value; break }
}
if (-not $site) {
    Write-Result '' '' ''
    exit 1
}

# Informacion del servicio de base de datos (mysql o mariadb)
$mysql = $null
if ($site.services -and $site.services.mysql) {
    $mysql = $site.services.mysql
} else {
    foreach ($s in $site.services.PSObject.Properties) {
        if ($s.Value.role -eq 'db') { $mysql = $s.Value; break }
    }
}
if (-not $mysql) {
    Write-Result '' '' ([string]$site.domain)
    exit 1
}

$port = ''
if ($mysql.ports -and $mysql.ports.MYSQL) { $port = [string]$mysql.ports.MYSQL[0] }
elseif ($mysql.port) { $port = [string]$mysql.port }

$version = [string]$mysql.version
$isMaria = ($mysql.name -match 'maria')

$servicesDir = Join-Path $env:APPDATA 'Local\lightning-services'
$binDir = ''
if (Test-Path -LiteralPath $servicesDir) {
    $prefix = 'mysql-'
    if ($isMaria) { $prefix = 'mariadb-' }

    $candidates = @()
    $candidates += Get-ChildItem -LiteralPath $servicesDir -Directory -Filter ($prefix + $version + '*') -ErrorAction SilentlyContinue | Select-Object -ExpandProperty FullName
    if (-not $candidates) {
        $candidates += Get-ChildItem -LiteralPath $servicesDir -Directory -Filter ($prefix + '*') -ErrorAction SilentlyContinue | Select-Object -ExpandProperty FullName
    }

    foreach ($c in $candidates) {
        foreach ($sub in @('bin\win64\bin', 'bin\win32\bin')) {
            $p = Join-Path $c $sub
            if (Test-Path -LiteralPath (Join-Path $p 'mysqldump.exe')) { $binDir = $p; break }
        }
        if ($binDir) { break }
    }
}

Write-Result $port $binDir ([string]$site.domain)
exit 0
