function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  const menuButton = document.querySelector(".menu-btn");
  const isOpen = navLinks.classList.toggle("active");
  menuButton.setAttribute("aria-expanded", String(isOpen));
}

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("navLinks").classList.remove("active");
    document.querySelector(".menu-btn").setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
