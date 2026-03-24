const app = document.getElementById("app");

/* Routes */
const routes = {
    home: "<h2>Home Page</h2><p>Welcome to home.</p>",
    about: "<h2>About Page</h2><p>This is about us.</p>",
    contact: "<h2>Contact Page</h2><p>Contact us here.</p>"
};

/* Render function */
function render() {
    let hash = window.location.hash.replace("#", "");

    if (!hash) hash = "home";

    app.innerHTML = routes[hash] || "<h2>404 Page</h2>";
}

/* Listen to hash change */
window.addEventListener("hashchange", render);

/* Initial load */
window.addEventListener("load", render);