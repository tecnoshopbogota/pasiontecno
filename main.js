let products = document.querySelectorAll('.k-product-contenedor');

products.forEach((product, index) => {
    product.addEventListener('click', function() {
        // Primero, resetea el 'grid-row' de todos los productos
        products.forEach(p => {
            p.style.gridRow = 'auto / span 1';
        });

        // Luego, si el producto en el que se hizo clic ya tiene la clase 'expanded', la elimina; si no la tiene, la agrega
        this.classList.toggle('expanded');

        // Si el producto en el que se hizo clic tiene la clase 'expanded', cambia su 'grid-row' para que se muestre primero y ocupe todas las filas restantes
        if (this.classList.contains('expanded')) {
            this.style.gridRow = '1 / span 100';
        }
    });
});
let precios = document.querySelectorAll('.product-price');

precios.forEach(precio => {
    let valor = Number(precio.textContent.replace(/\D/g, '')); // Elimina todos los caracteres no numéricos
    let valorFormateado = valor.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
    precio.textContent = valorFormateado;
});