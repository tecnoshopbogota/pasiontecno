let products = document.querySelectorAll('.product');
let scrollPosition = 0; // Variable para guardar la posición de desplazamiento

products.forEach(product => {
    product.addEventListener('click', function(event) {
        // Guardar la posición de desplazamiento antes de expandir el producto
        scrollPosition = window.scrollY;

        // Primero, elimina la clase 'expanded' de todos los productos
        products.forEach(p => {
            if (p !== this) {
                p.classList.remove('expanded');
            }
        });

        // Luego, si el producto en el que se hizo clic ya tiene la clase 'expanded', la elimina; si no la tiene, la agrega
        this.classList.toggle('expanded');

        // Restaurar la posición de desplazamiento después de expandir o contraer el producto
        if (this.classList.contains('expanded')) {
            // Si se está expandiendo el producto, evitar que la página se mueva
            event.preventDefault();
            window.scrollTo(0, scrollPosition);
        }
    });
});

let precios = document.querySelectorAll('.product-price');

precios.forEach(precio => {
    let valor = Number(precio.textContent.replace(/\D/g, '')); // Elimina todos los caracteres no numéricos
    let valorFormateado = valor.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
    precio.textContent = valorFormateado;
});
