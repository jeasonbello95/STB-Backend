param(
    [string]$Mensaje = ""
)

Write-Host "============================================" -ForegroundColor Cyan
Write-Host "  Subiendo cambios del Backend a GitHub..." -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan

if ([string]::IsNullOrWhiteSpace($Mensaje)) {
    $Fecha = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    $Mensaje = "Actualizacion backend: $Fecha"
}

git add .
git commit -m "$Mensaje"
git push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n[OK] Cambios del backend subidos correctamente con mensaje: '$Mensaje'" -ForegroundColor Green
} else {
    Write-Host "`n[AVISO] Revisa si necesitas autenticarte con: gh auth login" -ForegroundColor Yellow
}
