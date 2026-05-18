// Footer year and last modified
document.getElementById("year").textContent = new Date().getFullYear();

const lastModified = new Date(document.lastModified);
document.getElementById("lastModified").textContent = lastModified.toLocaleDateString("en-US", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric"
});

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
