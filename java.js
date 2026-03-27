function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Show the selected page
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }
}

let cart = [];

function addToCart(name, price) {
    cart.push({name, price});
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        const li = document.createElement('li');
        li.textContent = `${item.name} - ₹${item.price}`;
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.onclick = () => removeFromCart(index);
        li.appendChild(removeBtn);
        cartItems.appendChild(li);
    });
    document.getElementById('total').textContent = total;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function buy() {
    if (cart.length === 0) {
        alert('Cart is empty!');
        return;
    }
    alert(`Total: ₹${document.getElementById('total').textContent}. Thank you for your purchase!`);
    cart = [];
    updateCart();
}

function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple fake login validation
    if (username === 'admin' && password === 'password') {
        alert('Login successful! Welcome back.');
        // In a real app, you'd redirect or set session
    } else {
        alert('Invalid username or password. Try username: admin, password: password');
    }
}

function handleSignup(event) {
    event.preventDefault();
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters long!');
        return;
    }

    // Fake signup success
    alert(`Signup successful! Welcome ${fullname}. You can now login with username: ${username}`);
    // In a real app, you'd send data to server
}