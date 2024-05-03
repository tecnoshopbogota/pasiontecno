let products = document.querySelectorAll('.product');

products.forEach(product => {
    product.addEventListener('click', function() {
        // Primero, elimina la clase 'expanded' de todos los productos
        products.forEach(p => {
            if (p !== this) {
                p.classList.remove('expanded');
            }
        });

        // Luego, si el producto en el que se hizo clic ya tiene la clase 'expanded', la elimina; si no la tiene, la agrega
        this.classList.toggle('expanded');
    });
});

let precios = document.querySelectorAll('.product-price');

precios.forEach(precio => {
    let valor = Number(precio.textContent.replace(/\D/g, '')); // Elimina todos los caracteres no numéricos
    let valorFormateado = valor.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
    precio.textContent = valorFormateado;
});