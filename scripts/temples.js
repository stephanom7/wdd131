// Footer year and last modified
// Footer year and last modified
document.getElementById("year").textContent = new Date().getFullYear();

const lastModified = new Date(document.lastModified);
document.getElementById("lastModified").textContent = lastModified.toLocaleString();


// Hamburger menu toggle
const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", () => {
  if (navMenu.style.display === "flex") {
    navMenu.style.display = "none";
    menuButton.textContent = "☰";
  } else {
    navMenu.style.display = "flex";
    menuButton.textContent = "✖";
  }
});
