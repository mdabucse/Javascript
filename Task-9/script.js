const content = document.getElementById("content");
const loading = document.getElementById("loading");

let page = 1;
let isLoading = false;

// Simulate API fetch
function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            let data = [];
            for (let i = 1; i <= 10; i++) {
                data.push(`Item ${(page - 1) * 10 + i}`);
            }
            resolve(data);
        }, 1000);
    });
}

// Load data
async function loadContent() {
    if (isLoading) return;

    isLoading = true;
    loading.style.display = "block";

    const data = await fetchData();

    data.forEach(item => {
        const div = document.createElement("div");
        div.className = "card";
        div.textContent = item;
        content.appendChild(div);
    });

    page++;
    isLoading = false;
    loading.style.display = "none";

    // 🔥 IMPORTANT FIX
    if (document.body.offsetHeight <= window.innerHeight) {
        loadContent(); // load more until scroll appears
    }
}

// Detect scroll
window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const fullHeight = document.body.offsetHeight;

    // If near bottom
    if (scrollTop + windowHeight >= fullHeight - 100) {
        loadContent();
    }
});

// Initial load
loadContent();
