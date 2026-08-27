@echo off
chcp 65001 >nul

echo ============================================
echo   Creando Repositorio Backend en GitHub...
echo ============================================

gh repo create STB-Backend --source=. --public --push

if %ERRORLEVEL% equ 0 (
    echo.
    echo [OK] Repositorio STB-Backend creado y subido a GitHub exitosamente.
) else (
    echo.
    echo [AVISO] Si no has iniciado sesion en GitHub CLI, ejecuta primero: gh auth login
)
pause
