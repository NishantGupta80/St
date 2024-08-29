const apiUrl = 'products.json'; // URL to the JSON file
const productContainer = document.getElementById('product-container');
const cartContainer = document.getElementById('cart-container');
let cart = [];

// Fetch the product data
fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        displayProducts(data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

// Display products
function displayProducts(products) {
    productContainer.innerHTML = '';

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;

        productContainer.appendChild(productDiv);
    });
}

// Add product to cart
function addToCart(productId) {
    fetch(apiUrl)
        .then(response => response.json())
        .then(products => {
            const product = products.find(p => p.id === productId);
            if (product) {
                cart.push(product);
                updateCart();
            }
        });
}

// Update cart display
function updateCart() {
    cartContainer.innerHTML = '';
    
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    const cartList = document.createElement('ul');
    
    cart.forEach(product => {
        const cartItem = document.createElement('li');
        cartItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}" style="width: 50px;">
            ${product.name} - $${product.price.toFixed(2)}
        `;
        cartList.appendChild(cartItem);
    });
    
    cartContainer.appendChild(cartList);
}
