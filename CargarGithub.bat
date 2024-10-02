@echo off
cd "C:\Users\cod_d\OneDrive\Documentos\TECNO SHOP\Pagina WEB\pasiontecno"

git config --global user.email "tu_correo@example.com"
git config --global user.name "Tu Nombre"

git add .
git commit -m "actualizacion"
git pull origin main
git push origin main
pause