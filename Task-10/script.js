//    Product Data
const products = [
    { id: 1, name: "Laptop", price: 50000, category: "electronics", image: "https://via.placeholder.com/150" },
    { id: 2, name: "T-Shirt", price: 800, category: "clothing", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Book", price: 400, category: "books", image: "https://via.placeholder.com/150" },
    { id: 4, name: "Headphones", price: 2000, category: "electronics", image: "https://via.placeholder.com/150" }
];

//    Cart State
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

//    Cart Functions

function addToCart(product) {
    let existing = cart.find(item => item.id === product.id);

    if (existing) {
        existing.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    saveCart();
    renderCart();
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    renderCart();
}

function updateQty(id, qty) {
    if (qty < 1) return;

    let item = cart.find(i => i.id === id);
    if (item) item.qty = qty;

    saveCart();
    renderCart();
}

function clearCart() {
    cart = [];
    saveCart();
    renderCart();
}

//    Totals
function getTotals() {
    let subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    let tax = subtotal * 0.1;
    let discount = subtotal > 5000 ? 500 : 0;

    return {
        subtotal,
        tax,
        discount,
        total: subtotal + tax - discount
    };
}

//    DOM Elements

const productList = document.getElementById("productList");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");

const subtotalEl = document.getElementById("subtotal");
const taxEl = document.getElementById("tax");
const discountEl = document.getElementById("discount");
const totalEl = document.getElementById("total");

const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const checkoutBtn = document.getElementById("checkoutBtn");

//    Render Products

function renderProducts(data) {
    productList.innerHTML = "";

    data.forEach(product => {
        let div = document.createElement("div");
        div.className = "product-card";

        div.innerHTML = `
            <img src="${product.image}" />
            <h3>${product.name}</h3>
            <p class="price">₹${product.price}</p>
            <button>Add to Cart</button>
        `;

        div.querySelector("button").addEventListener("click", () => {
            addToCart(product);
        });

        productList.appendChild(div);
    });
}

//    Render Cart

function renderCart() {
    cartItems.innerHTML = "";

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty</p>";
    }

    cart.forEach(item => {
        let div = document.createElement("div");
        div.className = "cart-item";

        div.innerHTML = `
            <span>${item.name}</span>
            <input type="number" min="1" value="${item.qty}" />
            <span>₹${item.price * item.qty}</span>
            <button>X</button>
        `;

        div.querySelector("input").addEventListener("change", (e) => {
            updateQty(item.id, parseInt(e.target.value));
        });

        div.querySelector("button").addEventListener("click", () => {
            removeFromCart(item.id);
        });

        cartItems.appendChild(div);
    });

    let { subtotal, tax, discount, total } = getTotals();

    subtotalEl.textContent = subtotal;
    taxEl.textContent = tax.toFixed(2);
    discountEl.textContent = discount;
    totalEl.textContent = total.toFixed(2);

    cartCount.textContent = cart.length;
}

//    Checkout Logic
checkoutBtn.addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let { total } = getTotals();

    alert(`Order placed successfully!\nTotal: ₹${total}`);

    clearCart();
});


//    Search & Filter
function filterProducts() {
    let search = searchInput.value.toLowerCase();
    let category = categoryFilter.value;

    let filtered = products.filter(p => {
        let matchSearch = p.name.toLowerCase().includes(search);
        let matchCategory = category === "all" || p.category === category;
        return matchSearch && matchCategory;
    });

    renderProducts(filtered);
}

// Events
searchInput.addEventListener("input", filterProducts);
categoryFilter.addEventListener("change", filterProducts);

//Init
renderProducts(products);
renderCart();