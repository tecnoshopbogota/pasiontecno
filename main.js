// Selecciona todos los elementos con la clase 'product'
let products = document.querySelectorAll('.product');
let scrollPosition = 0; // Variable para guardar la posición de desplazamiento

// Verifica que 'products' no esté vacío
if (products.length > 0) {
    products.forEach(product => {
        // Agrega un evento de clic a cada producto
        product.addEventListener('click', function(event) {
            // Verifica si el clic fue en un enlace dentro del producto
            if (event.target.tagName === 'A') {
                return; // Permite que el enlace funcione normalmente
            }

            // Prevenir el comportamiento predeterminado del clic
            event.preventDefault();

            // Si ya hay un producto expandido, contraerlo y restaurar la posición de desplazamiento
            let expandedProduct = document.querySelector('.product.expanded');
            if (expandedProduct && expandedProduct !== this) {
                expandedProduct.classList.remove('expanded');
                window.scrollTo(0, scrollPosition);
                console.log('Posición existente restaurada:', scrollPosition);
            }

            // Si el producto en el que se hizo clic no está expandido, expandirlo y guardar la posición de desplazamiento
            if (!this.classList.contains('expanded')) {
                scrollPosition = window.scrollY;
                this.classList.add('expanded');
                console.log('Posición de desplazamiento guardada:', scrollPosition);
                setTimeout(() => {
                    window.scrollTo(0, scrollPosition);
                }, 0);
            } else {
                // Si el producto ya está expandido, simplemente contraerlo y restaurar la posición de desplazamiento
                this.classList.remove('expanded');
                setTimeout(() => {
                    window.scrollTo(0, scrollPosition);
                    console.log('Posición nueva restaurada:', scrollPosition);
                }, 0);
            }
        });
    });

    // Selecciona todos los elementos con la clase 'product-price'
    let precios = document.querySelectorAll('.product-price');

    // Verifica que 'precios' no esté vacío
    if (precios.length > 0) {
        precios.forEach(precio => {
            let valor = Number(precio.textContent.replace(/\D/g, '')); // Elimina todos los caracteres no numéricos
            let valorRedondeado = Math.round(valor); // Redondear el valor al número entero más cercano
            let valorFormateado = valorRedondeado.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
            precio.textContent = valorFormateado;
        });
    } else {
        console.error('No se encontraron elementos con la clase .product-price');
    }
} else {
    console.error('No se encontraron elementos con la clase .product');
}