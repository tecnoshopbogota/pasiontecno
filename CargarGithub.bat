@echo off
cd "C:\Users\cod_d\OneDrive\Documentos\TECNO SHOP\Pagina WEB\pasiontecno"

git config --global user.email "tu_correo@example.com"
git config --global user.name "Tu Nombre"

git add .
git commit -m "Actualizacion"

REM Resolver conflictos manteniendo los cambios locales
git pull origin main --strategy-option ours

REM Empujar los cambios al repositorio remoto
git push origin main

pause