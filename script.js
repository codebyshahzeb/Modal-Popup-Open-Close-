const modal = document.getElementById("modal");
const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");

// Open modal
openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

// Close modal
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal when clicking outside
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
