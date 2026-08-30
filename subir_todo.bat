@echo off
setlocal enabledelayedexpansion
chcp 65001 >nul

echo ======================================================
echo    SUBIENDO CAMBIOS A GITHUB (FRONTEND + BACKEND)
echo ======================================================
echo.

set "ROOT_DIR=%~dp0"
if not exist "%ROOT_DIR%STB-Academy" (
    if exist "%ROOT_DIR%..\STB-Academy" (
        set "ROOT_DIR=%ROOT_DIR%..\"
    )
)

set "MSG=%~1"
if "%MSG%"=="" (
    set "MSG=Actualizacion general: %date% %time%"
)

rem ============================================================
rem  DETECCION AUTOMATICA DEL SITIO EN LOCAL BY FLYWHEEL
rem  Esto hace que funcione en cualquier PC sin editar rutas.
rem  Prioridad:
rem    1) Si existe sync_config.bat en la carpeta raiz del proyecto
rem       (donde estan STB-Academy y STB-Backend), lo usa como override
rem       (crealo con la linea: set "LOCAL_SITE=C:\...\Local Sites\mi_sitio")
rem    2) Busca SOLO las carpetas stbacademylocal / stbacademy en
rem       %USERPROFILE%\Local Sites (NO escanea otros sitios)
rem ============================================================
if exist "%ROOT_DIR%sync_config.bat" call "%ROOT_DIR%sync_config.bat"

set "LOCAL_SITES_DIR=%USERPROFILE%\Local Sites"

if not defined LOCAL_SITE (
    for %%N in (stbacademylocal stbacademy) do (
        if not defined LOCAL_SITE (
            if exist "%LOCAL_SITES_DIR%\%%N\app\public\wp-load.php" (
                set "LOCAL_SITE=%LOCAL_SITES_DIR%\%%N"
            )
        )
    )
)

if defined LOCAL_SITE (
    set "LOCAL_PUBLIC=%LOCAL_SITE%\app\public"
    echo [SITIO] WordPress Local detectado: !LOCAL_PUBLIC!
) else (
    echo [AVISO] No se encontro el sitio Local automaticamente.
    echo         El auto-detect solo busca stbacademylocal / stbacademy.
    echo         Si tu sitio tiene otro nombre, crea sync_config.bat en la
    echo         carpeta raiz del proyecto (donde estan STB-Academy y
    echo         STB-Backend^) con la linea:
    echo             set "LOCAL_SITE=C:\Ruta\a\tu\Local Sites\mi_sitio"
    set "LOCAL_PUBLIC="
)
echo.

rem ============================================================
rem  [PASO 1/3] Sincronizar WordPress Local hacia Repo (app\public)
rem ============================================================
set "REPO_PUBLIC=%ROOT_DIR%STB-Backend\app\public"

if defined LOCAL_PUBLIC (
    echo [1/3] Copiando WordPress desde Local al repositorio...
    echo   Origen : !LOCAL_PUBLIC!
    echo   Destino: %REPO_PUBLIC%
    echo ------------------------------------------------------
    robocopy "!LOCAL_PUBLIC!" "%REPO_PUBLIC%" /MIR ^
        /XD cache upgrade upgrade-temp-backup ai1wm-backups wpvividbackups wpvivid_staging backup-db node_modules .git ^
        /XF wp-config.php .envrc local-xdebuginfo.php .htaccess *.log *-credentials.php *.credentials.php firebase-service-account.json service-account*.json ^
        /NFL /NDL /NJH /NJS /NC /NS /NP
    set "rc=!ERRORLEVEL!"
    if !rc! GEQ 8 (
        echo [AVISO] La copia de WordPress fallo (codigo !rc!^). Se omite y se continua.
    ) else (
        echo [OK] WordPress sincronizado hacia el repo.
    )
) else (
    echo [AVISO] Se omite la copia de WordPress: no hay sitio Local detectado.
)

rem ---- [BD] Respaldar base de datos de WordPress ----
set "DB_DUMP=%ROOT_DIR%STB-Backend\database\wp-db.sql"
if defined LOCAL_SITE (
    for %%F in ("%LOCAL_SITE%") do set "SITE_NAME=%%~nxF"
    if exist "%ROOT_DIR%STB-Backend\database\local_db_info.ps1" (
        for /f "usebackq delims=" %%L in (`powershell -NoProfile -ExecutionPolicy Bypass -File "%ROOT_DIR%STB-Backend\database\local_db_info.ps1" -SiteName "!SITE_NAME!"`) do set "%%L"
        if defined BIN if defined PORT (
            if not exist "%ROOT_DIR%STB-Backend\database" mkdir "%ROOT_DIR%STB-Backend\database"
            echo [BD] Exportando base de datos WordPress...
            "%BIN%\mysqldump.exe" -h 127.0.0.1 -P !PORT! -u root -proot --no-tablespaces --single-transaction --routines local > "%DB_DUMP%"
            set "rc=!ERRORLEVEL!"
            if !rc! equ 0 (
                echo [OK] Base de datos exportada hacia database\wp-db.sql.
            ) else (
                echo [AVISO] Fallo al exportar la base de datos (codigo !rc!^). Se omite.
            )
        ) else (
            echo [AVISO] No se pudo localizar MySQL Local. Se omite el respaldo de BD.
        )
    ) else (
        echo [AVISO] Falta STB-Backend\database\local_db_info.ps1. Se omite el respaldo de BD.
    )
) else (
    echo [AVISO] Sin sitio Local; se omite el respaldo de BD.
)
echo.

echo [2/3] Subiendo Frontend (STB-Academy)...
echo ------------------------------------------------------
if exist "%ROOT_DIR%STB-Academy" (
    pushd "%ROOT_DIR%STB-Academy"
    git add .
    git commit -m "%MSG%" >nul 2>&1
    git pull --rebase origin main
    git push origin main
    if !ERRORLEVEL! equ 0 (
        echo.
        echo [OK] Frontend sincronizado y subido correctamente.
    ) else (
        echo.
        echo [AVISO] Hubo un problema al subir Frontend.
    )
    popd
) else (
    echo [ERROR] No se encontro la carpeta STB-Academy.
)

echo.
echo [3/3] Subiendo Backend (STB-Backend)...
echo ------------------------------------------------------
if exist "%ROOT_DIR%STB-Backend" (
    pushd "%ROOT_DIR%STB-Backend"
    git add .
    git commit -m "%MSG%" >nul 2>&1
    git pull --rebase origin main
    git push origin main
    if !ERRORLEVEL! equ 0 (
        echo.
        echo [OK] Backend sincronizado y subido correctamente.
    ) else (
        echo.
        echo [AVISO] Hubo un problema al subir Backend.
    )
    popd
) else (
    echo [ERROR] No se encontro la carpeta STB-Backend.
)

echo.
echo ======================================================
echo    PROCESO COMPLETADO
echo ======================================================
echo.
pause
