Write-Host "============================================" -ForegroundColor Cyan
Write-Host "  Actualizando Backend desde GitHub..." -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan

git pull origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n[OK] Backend actualizado con exito." -ForegroundColor Green
} else {
    Write-Host "`n[ERROR] No se pudo actualizar. Revisa tu conexion o estado de git." -ForegroundColor Red
}
