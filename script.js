const products = [
    { id: 1, name: "iPhone 15", category: "Phones", price: 1000 },
    { id: 2, name: "Samsung S24", category: "Phones", price: 900 },
    { id: 3, name: "MacBook Pro", category: "Laptops", price: 1999 },
    { id: 4, name: "Asus ROG", category: "Laptops", price: 1500 },
    { id: 5, name: "Xiaomi 14", category: "Phones", price: 720 }
];

let cart = [];

const productsList = document.getElementById('products-list');
const cartList = document.getElementById('cart-list');
const totalPriceVal = document.getElementById('total-price');

function displayProducts(filteredProducts) {
    productsList.innerHTML = "";
    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
            <div class="product-title">${product.name}</div>
            <div class="product-price">$${product.price}</div>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsList.appendChild(card);
    });
}

function filterProducts(category) {
    if (category === 'all') {
        displayProducts(products);
    } else {
        const filtered = products.filter(p => p.category === category);
        displayProducts(filtered);
    }
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    cartList.innerHTML = "";
    cart.forEach((product, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${product.name} - $${product.price}</span>
            <span class="remove-item" onclick="removeFromCart(${index})">X</span>
        `;
        cartList.appendChild(li);
    });

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalPriceVal.textContent = total;
}

displayProducts(products);