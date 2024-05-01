let products = document.querySelectorAll('.product');

products.forEach(product => {
    product.addEventListener('click', function() {
        this.classList.toggle('expanded');
    });
});