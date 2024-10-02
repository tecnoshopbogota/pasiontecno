import os
import pandas as pd
from bs4 import BeautifulSoup

# Lista de archivos HTML
html_files = [
    'audio.html',
    'accesorios.html',
    'camaras.html',
    'electrodomesticos.html',
    'hogarinteligente.html',
    'oficina.html',
    'smartwatch.html',
    'videojuegos.html'
]

# Crear listas para almacenar los datos
codigos = []
descripciones = []
precios = []
imagenes = []
enlaces = []
categorias = []

# Iterar sobre cada archivo HTML
for html_file in html_files:
    # Leer el archivo HTML
    with open(html_file, 'r', encoding='utf-8') as file:
        soup = BeautifulSoup(file, 'html.parser')
    
    # Encontrar todos los productos
    products = soup.find_all('div', class_='product k-product-contenedor')
    
    # Extraer los datos de cada producto
    for product in products:
        codigo = product.find('div', class_='product-code').text.strip()
        descripcion = product.find('div', class_='product-description').text.strip()
        precio = product.find('div', class_='product-price').text.strip()
        imagen = product.find('img')['src']
        enlace = product.find('a')['href'] if product.find('a') else ''
        
        codigos.append(codigo)
        descripciones.append(descripcion)
        precios.append(precio)
        imagenes.append(imagen)
        enlaces.append(enlace)
        categorias.append(os.path.splitext(html_file)[0])  # Añadir la categoría basada en el nombre del archivo

# Crear un DataFrame con los datos
df = pd.DataFrame({
    'Categoría': categorias,
    'Código': codigos,
    'Descripción': descripciones,
    'Precio': precios,
    'Imagen': imagenes,
    'Enlace': enlaces
})

# Guardar el DataFrame en un archivo Excel
output_file = 'backup_productos.xlsx'
df.to_excel(output_file, index=False)

print(f"Datos de los productos guardados en {output_file}")