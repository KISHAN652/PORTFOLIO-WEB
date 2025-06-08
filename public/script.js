document.getElementById("menuToggle").addEventListener("click", function () {
    const menu = document.getElementById("navMenu");
    menu.classList.toggle("show");
});

document.getElementById("closeMenu").addEventListener("click", function () {
    const menu = document.getElementById("navMenu");
    menu.classList.remove("show");
});
// Dark Mode Toggle Function
// const darkModeBtn = document.getElementById("darkModeToggle");

// darkModeBtn.addEventListener("click", () => {
//     document.body.classList.toggle("dark-mode");

//     // Store user preference
//     localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode"));
// });

// // Preserve Dark Mode on Page Reload
// if (localStorage.getItem("dark-mode") === "true") {
//     document.body.classList.add("dark-mode");
// }
// const darkModeBtn = document.getElementById("darkModeToggle");
// if (darkModeBtn) {
//     darkModeBtn.addEventListener("click", () => {
//         document.body.classList.toggle("dark-mode");
//         localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode"));
//     });

//     if (localStorage.getItem("dark-mode") === "true") {
//         document.body.classList.add("dark-mode");
//     }
// } else {
//     console.log("Dark Mode Button NOT Found");
// }
// document.getElementById("darkModeToggle").style.display = "block"; // Ensure it's visible
const darkModeBtn = document.getElementById("darkModeToggle");

if (darkModeBtn) {
    darkModeBtn.style.display = "block"; // Ensure it's visible

    darkModeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode"));
    });

    if (localStorage.getItem("dark-mode") === "true") {
        document.body.classList.add("dark-mode");
    }
} else {
    console.log("Dark Mode Button NOT Found");
}

