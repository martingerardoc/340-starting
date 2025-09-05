// Setting the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// Setting the last modified date
document.getElementById(
  "lastModified"
).textContent = `Last Update: ${document.lastModified}`;

// Menu toggle functionality
const menuButton = document.getElementById("menu");
const navigationList = document.querySelector("ul.navigation");

menuButton.addEventListener("click", () => {
  navigationList.classList.toggle("open");
  menuButton.classList.toggle("open"); // Toggles icon between ☰ and ❎
});