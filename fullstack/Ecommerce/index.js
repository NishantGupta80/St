let products = [
    { id: 1, name: 'Product 1', price: 10, description: 'Description of Product 1' },
    { id: 2, name: 'Product 2', price: 20, description: 'Description of Product 2' },
    { id: 3, name: 'Product 3', price: 30, description: 'Description of Product 3' },
    { id: 4, name: 'Product 4', price: 40, description: 'Description of Product 4' },
    { id: 5, name: 'Product 5', price: 50, description: 'Description of Product 5' },
    { id: 6, name: 'Product 6', price: 60, description: 'Description of Product 6' },
    { id: 7, name: 'Product 7', price: 70, description: 'Description of Product 7' },
    { id: 8, name: 'Product 8', price: 80, description: 'Description of Product 8' },
    { id: 9, name: 'Product 9', price: 90, description: 'Description of Product 9' },
    { id: 10, name: 'Product 10', price: 100, description: 'Description of Product 10' }
];

let loadedProducts = 0;
const productsPerPage = 3;
let cart = [];

function loadProducts() {
    const container = document.getElementById('products-container');
    let html = '';
    const toLoad = products.slice(loadedProducts, loadedProducts + productsPerPage);
    
    toLoad.forEach(product => {
        html += `
            <div class="product-card" data-id="${product.id}">
                <h3>${product.name}</h3>
                <p>Price: $${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
    });

    container.innerHTML += html;
    loadedProducts += toLoad.length;

    if (loadedProducts >= products.length) {
        document.getElementById('load-more').style.display = 'none';
    }
}

function addToCart(id) {
    const product = products.find(prod => prod.id === id);
    cart.push(product);
    updateCart();
}

function updateCart() {
    const cartButton = document.getElementById('cart-btn');
    cartButton.textContent = `Cart (${cart.length})`;
    
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = cart.map(item => `<p>${item.name} - $${item.price}</p>`).join('');
    cartItems.style.display = cart.length ? 'block' : 'none';
}

function showProductDetails(id) {
    const product = products.find(prod => prod.id === id);
    const modal = document.getElementById('product-details-modal');
    const details = document.getElementById('product-details');
    
    details.innerHTML = `
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
        <p>${product.description}</p>
    `;
    
    modal.style.display = 'block';
}

document.getElementById('load-more').addEventListener('click', loadProducts);

document.addEventListener('click', function(event) {
    if (event.target.closest('.product-card')) {
        const id = parseInt(event.target.closest('.product-card').getAttribute('data-id'));
        showProductDetails(id);
    }
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('product-details-modal').style.display = 'none';
});


loadProducts();
