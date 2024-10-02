import os
import pandas as pd
from bs4 import BeautifulSoup

# Leer el archivo Excel
df = pd.read_excel('productos.xlsx', sheet_name=None)

# Creamos la variable base_path para almacenar la ruta de los archivos HTML que es la misma de productos.py
base_path = os.path.dirname(os.path.abspath(__file__)) + '/'

# Iterar sobre cada hoja y archivo HTML
for sheet_name, data in df.items():
    html_file = f"{base_path}{sheet_name}.html"
    
    # Leer el archivo HTML
    with open(html_file, 'r', encoding='utf-8') as file:
        soup = BeautifulSoup(file, 'html.parser')
    
    # Encontrar el contenedor donde se agregarán los productos
    container = soup.find('div', class_='ak-grid-items-category')
    
    # Limpiar el contenedor existente
    container.clear()
    
    # Crear los nuevos elementos HTML a partir del DataFrame
    for index, row in data.iterrows():
        product_div = soup.new_tag('div', **{'class': 'k-grid-items-category'})
        if pd.notna(row['Enlace']) and row['Enlace'].strip():
            product_content = f'''
                <div class="product k-product-contenedor">
                    <div class="content-wrapper">
                        <div class="image-wrapper">
                            <img src="{row['Imagen']}" alt="audio">
                            <div class="expandable-content">
                                <a href="{row['Enlace']}" target="_blank">
                                    <img src="img/Video.png" alt="" style="width: 50px; height: 50px; vertical-align: middle;">
                                    Ver Video
                                </a>
                            </div>
                        </div>
                        <div class="text-content">
                            <div class="product-code">{row['Código']}</div>
                            <div class="product-description">{row['Descripción']}</div>
                            <div class="product-price">${row['Precio']}</div>
                        </div>
                    </div>
                </div>
            '''
        else:
            product_content = f'''
                <div class="product k-product-contenedor">
                    <div class="content-wrapper">
                        <div class="image-wrapper">
                            <img src="{row['Imagen']}" alt="audio">
                            <div class="expandable-content">
                                <a href="{row['Enlace']}" target="_blank">
                                    <img src="img/Video.png" alt="" style="width: 50px; height: 50px; vertical-align: middle;">
                                    ¡Video no disponible!
                                </a>
                            </div>
                        </div>
                        <div class="text-content">
                            <div class="product-code">{row['Código']}</div>
                            <div class="product-description">{row['Descripción']}</div>
                            <div class="product-price">${row['Precio']}</div>
                        </div>
                    </div>
                </div>
            '''
        product_div.append(BeautifulSoup(product_content, 'html.parser'))
        container.append(product_div)
    
    # Guardar el archivo HTML actualizado
    with open(html_file, 'w', encoding='utf-8') as file:
        file.write(str(soup))

print("Archivos HTML actualizados correctamente.")