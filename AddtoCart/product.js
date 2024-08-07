document.addEventListener('DOMContentLoaded', () => {
    const productDetailElement = document.getElementById('product-detail');
    const addToCartButton = document.getElementById('add-to-cart');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));

    const products = [
        { id: 1, name: 'Product 1', price: 10, image: 'vegetable.jpeg', description: 'Description of Product 1' },
        { id: 2, name: 'Product 2', price: 20, image: 'vegetable.jpeg', description: 'Description of Product 2' },
        { id: 3, name: 'Product 3', price: 30, image: 'vegetable.jpeg', description: 'Description of Product 3' },
        { id: 4, name: 'Product 4', price: 40, image: 'vegetable.jpeg', description: 'Description of Product 4' }
    ];

    const product = products.find(p => p.id === productId);

    if (product) {
        productDetailElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>$${product.price.toFixed(2)}</p>
        `;
    } else {
        productDetailElement.innerHTML = '<p>Product not found.</p>';
        addToCartButton.style.display = 'none';
    }

    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    function addToCart() {
        const existingProduct = cart.find(item => item.id === productId);
        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cart.push({ id: productId, quantity: 1 });
        }
        saveCart();
        window.location.href = 'cart.html'; // Navigate to cart page
    }

    addToCartButton.addEventListener('click', addToCart);
});
