@echo off
setlocal enabledelayedexpansion
chcp 65001 >nul

echo ======================================================
echo    SUBIENDO CAMBIOS DE FRONTEND Y BACKEND A GITHUB
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

echo [1/2] Subiendo Frontend (STB-Academy)...
echo ------------------------------------------------------
if exist "%ROOT_DIR%STB-Academy" (
    pushd "%ROOT_DIR%STB-Academy"
    git add .
    git commit -m "%MSG%"
    git push origin main
    if !ERRORLEVEL! equ 0 (
        echo.
        echo [OK] Frontend subido correctamente.
    ) else (
        echo.
        echo [AVISO] No se pudo subir Frontend o no habia cambios nuevos.
    )
    popd
) else (
    echo [ERROR] No se encontro la carpeta STB-Academy.
)

echo.
echo [2/2] Subiendo Backend (STB-Backend)...
echo ------------------------------------------------------
if exist "%ROOT_DIR%STB-Backend" (
    pushd "%ROOT_DIR%STB-Backend"
    git add .
    git commit -m "%MSG%"
    git push origin main
    if !ERRORLEVEL! equ 0 (
        echo.
        echo [OK] Backend subido correctamente.
    ) else (
        echo.
        echo [AVISO] No se pudo subir Backend o no habia cambios nuevos.
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
