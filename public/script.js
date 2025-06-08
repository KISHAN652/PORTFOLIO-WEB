// Dark Mode Toggle with Animation
document.getElementById("darkModeToggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    // Apply fade effect on transition
    document.body.style.transition = "background 0.5s ease-in-out, color 0.5s ease-in-out";

    // Animated button feedback
    this.style.transform = "scale(1.1)";
    setTimeout(() => { this.style.transform = "scale(1)"; }, 200);

    // Save theme preference
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});

// Load previous theme on refresh
window.onload = function () {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
};

// Scroll to Top Button Enhancement
const scrollBtn = document.createElement("button");
scrollBtn.innerText = "↑";
scrollBtn.id = "scrollTopBtn";
document.body.appendChild(scrollBtn);

scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.background = "#ff4c68";
scrollBtn.style.color = "white";
scrollBtn.style.padding = "10px";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.display = "none";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.transition = "opacity 0.3s ease-in-out, transform 0.3s ease-in-out";

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollBtn.style.display = "block";
        scrollBtn.style.opacity = "1";
    } else {
        scrollBtn.style.opacity = "0";
        setTimeout(() => { scrollBtn.style.display = "none"; }, 300);
    }
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Smooth scrolling for navigation links
document.querySelectorAll("nav ul li a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Trigger bar animations when the skills section is in view
document.addEventListener("scroll", function () {
    const skillsSection = document.getElementById("skills");
    if (skillsSection.getBoundingClientRect().top < window.innerHeight * 0.85) {
        skillsSection.classList.add("animate-bars");
    }
});
// Mobile Navbar Toggle
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
});

// Dark Mode Toggle
document.getElementById("darkModeToggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    // Save preference in local storage
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});

// Load Dark Mode Preference
window.onload = function () {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
};

