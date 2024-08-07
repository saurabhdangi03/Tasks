document.addEventListener('DOMContentLoaded', () => {
    const cartElement = document.getElementById('cart');
    const resetButton = document.getElementById('reset-cart');
    const totalQuantityElement = document.getElementById('total-quantity');
    const totalPriceElement = document.getElementById('total-price');
    let cart = JSON.parse(sessionStorage.getItem('cart')) || [];

    const products = [
        { id: 1, name: 'Product 1', price: 10, image: 'product1.jpg' },
        { id: 2, name: 'Product 2', price: 20, image: 'product2.jpg' },
        { id: 3, name: 'Product 3', price: 30, image: 'product3.jpg' },
        { id: 4, name: 'Product 4', price: 40, image: 'product4.jpg' },
        { id: 5, name: 'Product 5', price: 40, image: 'product2.jpg' },
        { id: 6, name: 'Product 5', price: 40, image: 'product1.jpg' }
    ];

    function saveCart() {
        sessionStorage.setItem('cart', JSON.stringify(cart));
    }

    function renderCart() {
        cartElement.innerHTML = '';
        if (cart.length === 0) {
            cartElement.innerHTML = '<p>Your cart is empty.</p>';
            totalQuantityElement.textContent = '0';
            totalPriceElement.textContent = '0.00';
            return;
        }

        let totalQuantity = 0;
        let totalPrice = 0;

        cart.forEach(item => {
            const product = products.find(p => p.id === item.id);
            if (product) {
                const productElement = document.createElement('div');
                productElement.className = 'cart-item';
                productElement.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" class="cart-item-image">
                    <span>${product.name} - Quantity: ${item.quantity}</span>
                    <button class="increase-quantity" data-id="${item.id}">+</button>
                    <button class="decrease-quantity" data-id="${item.id}">-</button>
                `;
                cartElement.appendChild(productElement);

                totalQuantity += item.quantity;
                totalPrice += item.quantity * product.price;
            }
        });

        totalQuantityElement.textContent = totalQuantity;
        totalPriceElement.textContent = totalPrice.toFixed(2);
    }

    function increaseQuantity(productId) {
        const product = cart.find(item => item.id === productId);
        if (product) {
            product.quantity++;
            saveCart();
            renderCart();
        }
    }

    function decreaseQuantity(productId) {
        const product = cart.find(item => item.id === productId);
        if (product) {
            product.quantity--;
            if (product.quantity <= 0) {
                cart = cart.filter(item => item.id !== productId);
            }
            saveCart();
            renderCart();
        }
    }

    cartElement.addEventListener('click', (event) => {
        if (event.target.classList.contains('increase-quantity')) {
            const productId = parseInt(event.target.getAttribute('data-id'));
            increaseQuantity(productId);
        }
        if (event.target.classList.contains('decrease-quantity')) {
            const productId = parseInt(event.target.getAttribute('data-id'));
            decreaseQuantity(productId);
        }
    });

    resetButton.addEventListener('click', () => {
        cart = [];
        saveCart();
        renderCart();
    });

    renderCart();
});
