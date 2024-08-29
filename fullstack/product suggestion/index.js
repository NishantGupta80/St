let products = [];
let loadedProducts = 0;
const productsPerPage = 3;
let cart = [];

// Fetch products from products.json
async function fetchProducts() {
    try {
        const response = await fetch('products.json');
        products = await response.json();
        console.log(products);
        loadProducts();  // Initial load
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

// Load products into the page
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

// Add product to cart
function addToCart(id) {
    const product = products.find(prod => prod.id === id);
    cart.push(product);
    updateCart();
}

// Update cart display
function updateCart() {
    const cartButton = document.getElementById('cart-btn');
    cartButton.textContent = `Cart (${cart.length})`;
    
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = cart.map(item => `<p>${item.name} - $${item.price}</p>`).join('');
    cartItems.style.display = cart.length ? 'block' : 'none';
}

// Show product details in modal
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

// Search products based on the first letter
function searchProducts() {
    const searchValue = document.getElementById('search-input').value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().startsWith(searchValue));
    
    const container = document.getElementById('products-container');
    container.innerHTML = '';

    filteredProducts.forEach(product => {
        const productHtml = `
            <div class="product-card" data-id="${product.id}">
                <h3>${product.name}</h3>
                <p>Price: $${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
        container.innerHTML += productHtml;
    });

    if (filteredProducts.length === 0) {
        container.innerHTML = '<p>No products found.</p>';
    }
}

// Event listener for the load more button
document.getElementById('load-more').addEventListener('click', loadProducts);

// Event listener for closing the modal
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('product-details-modal').style.display = 'none';
});

// Initial fetch and load
fetchProducts();
