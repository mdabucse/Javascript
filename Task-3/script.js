let thumbnails = document.querySelectorAll(".thumb");
let lightbox = document.getElementById("lightbox");
let bigImg = document.getElementById("bigImg");
let closeBtn = document.getElementById("close");

/* Open */
thumbnails.forEach(img => {
    img.addEventListener("click", () => {
        bigImg.src = img.src;
        lightbox.classList.add("active");
    });
});

/* Close button */
closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("active");
});

/* Click outside */
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove("active");
    }
});
