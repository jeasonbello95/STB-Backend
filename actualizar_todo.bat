@echo off
setlocal enabledelayedexpansion
chcp 65001 >nul

echo ======================================================
echo    ACTUALIZANDO FRONTEND Y BACKEND DESDE GITHUB
echo ======================================================
echo.
echo   AVISO: Cierra o deten el sitio en Local by Flywheel
echo   antes de copiar, para evitar archivos bloqueados.
echo.

set "ROOT_DIR=%~dp0"
if not exist "%ROOT_DIR%STB-Academy" (
    if exist "%ROOT_DIR%..\STB-Academy" (
        set "ROOT_DIR=%ROOT_DIR%..\"
    )
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
    echo [SITIO] WordPress Local detectado: %LOCAL_PUBLIC%
) else (
    echo [AVISO] No se encontro el sitio Local automaticamente.
    echo         El auto-detect solo busca stbacademylocal / stbacademy.
    echo         Se omitira la copia de WordPress hacia Local. Si tu sitio
    echo         tiene otro nombre, crea sync_config.bat en la carpeta raiz
    echo         del proyecto (donde estan STB-Academy y STB-Backend) con:
    echo             set "LOCAL_SITE=C:\Ruta\a\tu\Local Sites\mi_sitio"
    set "LOCAL_PUBLIC="
)
echo.

echo [1/3] Actualizando Frontend (STB-Academy)...
echo ------------------------------------------------------
if exist "%ROOT_DIR%STB-Academy" (
    pushd "%ROOT_DIR%STB-Academy"
    git pull --rebase --autostash origin main
    if !ERRORLEVEL! equ 0 (
        echo.
        echo [OK] Frontend actualizado correctamente.
    ) else (
        echo.
        echo [ERROR] No se pudo actualizar Frontend. Revisa tu conexion o estado de git.
    )
    popd
) else (
    echo [ERROR] No se encontro la carpeta STB-Academy.
)

echo.
echo [2/3] Actualizando Backend (STB-Backend)...
echo ------------------------------------------------------
if exist "%ROOT_DIR%STB-Backend" (
    pushd "%ROOT_DIR%STB-Backend"
    git pull --rebase --autostash origin main
    if !ERRORLEVEL! equ 0 (
        echo.
        echo [OK] Backend actualizado correctamente.
    ) else (
        echo.
        echo [ERROR] No se pudo actualizar Backend. Revisa tu conexion o estado de git.
    )
    popd
) else (
    echo [ERROR] No se encontro la carpeta STB-Backend.
)

rem ============================================================
rem  [PASO 3/3] Sincronizar Repo hacia WordPress Local
rem ============================================================
set "REPO_PUBLIC=%ROOT_DIR%STB-Backend\app\public"

echo.
if defined LOCAL_PUBLIC (
    echo [3/3] Copiando WordPress desde el repo al sitio Local...
    echo   Origen : %REPO_PUBLIC%
    echo   Destino: !LOCAL_PUBLIC!
    echo ------------------------------------------------------
    if not exist "%REPO_PUBLIC%\wp-load.php" (
        echo [AVISO] No hay WordPress en %REPO_PUBLIC%. Revisa que el pull funciono.
    ) else (
        robocopy "%REPO_PUBLIC%" "!LOCAL_PUBLIC!" /MIR ^
            /XD cache upgrade upgrade-temp-backup ai1wm-backups wpvividbackups wpvivid_staging backup-db node_modules .git ^
            /XF wp-config.php .envrc local-xdebuginfo.php .htaccess *.log *-credentials.php *.credentials.php firebase-service-account.json service-account*.json ^
            /NFL /NDL /NJH /NJS /NC /NS /NP
        set "rc=!ERRORLEVEL!"
        if !rc! GEQ 8 (
            echo [AVISO] La copia de WordPress fallo (codigo !rc!). Se omite y se continua.
        ) else (
            echo [OK] WordPress sincronizado desde el repo hacia Local.
        )
    )
) else (
    echo [AVISO] Se omite la copia hacia Local: no hay sitio Local detectado.
)

echo.
echo ======================================================
echo    PROCESO COMPLETADO
echo ======================================================
echo.
pause
