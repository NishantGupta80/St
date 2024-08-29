const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const fs = require('fs');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Configure session middleware
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Load products
const productsFile = path.join(__dirname, 'products.json');
let products = JSON.parse(fs.readFileSync(productsFile, 'utf-8'));

// Routes
app.get('/', (req, res) => {
    res.render('index', { products });
});

app.get('/cart', (req, res) => {
    // Initialize cart if not already
    if (!req.session.cart) {
        req.session.cart = [];
    }
    res.render('cart', { cart: req.session.cart });
});

app.post('/add-to-cart', (req, res) => {
    const productId = parseInt(req.body.productId);
    const product = products.find(p => p.id === productId);

    if (product) {
        if (!req.session.cart) {
            req.session.cart = [];
        }
        req.session.cart.push(product);
    }

    res.redirect('/cart');
});

app.post('/checkout', (req, res) => {
    req.session.cart = [];
    res.redirect('/');
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
