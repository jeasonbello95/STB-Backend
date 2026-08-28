@echo off
setlocal enabledelayedexpansion
chcp 65001 >nul

echo ======================================================
echo    ACTUALIZANDO FRONTEND Y BACKEND DESDE GITHUB
echo ======================================================
echo.

set "ROOT_DIR=%~dp0"
if not exist "%ROOT_DIR%STB-Academy" (
    if exist "%ROOT_DIR%..\STB-Academy" (
        set "ROOT_DIR=%ROOT_DIR%..\"
    )
)

echo [1/2] Actualizando Frontend (STB-Academy)...
echo ------------------------------------------------------
if exist "%ROOT_DIR%STB-Academy" (
    pushd "%ROOT_DIR%STB-Academy"
    git pull --rebase --autostash origin main
    if !ERRORLEVEL! equ 0 (
        echo.
        echo [OK] Frontend actualizado correctamente.
    ) else (
        echo [ERROR] No se pudo actualizar Frontend. Revisa tu conexion o estado de git.
    )
    popd
) else (
    echo [ERROR] No se encontro la carpeta STB-Academy.
)

echo.
echo [2/2] Actualizando Backend (STB-Backend)...
echo ------------------------------------------------------
if exist "%ROOT_DIR%STB-Backend" (
    pushd "%ROOT_DIR%STB-Backend"
    git pull --rebase --autostash origin main
    if !ERRORLEVEL! equ 0 (
        echo.
        echo [OK] Backend actualizado correctamente.
    ) else (
        echo [ERROR] No se pudo actualizar Backend. Revisa tu conexion o estado de git.
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
