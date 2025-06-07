// document.getElementById("contactForm").addEventListener("submit", function (e) {
//     e.preventDefault();

//     const name = document.querySelector("input[name='name']").value.trim();
//     const email = document.querySelector("input[name='email']").value.trim();
//     const message = document.querySelector("textarea[name='message']").value.trim();

//     if (!name || !email || !message) {
//         alert("Please fill in all fields.");
//         return;
//     }

    // Send data to backend
//     fetch("/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, email, message }),
//     })
//     .then(response => response.json())
//     .then(data => {
//         alert(data.message);
//     })
//     .catch(error => {
//         console.error("Error:", error);
//         alert("Failed to send message.");
//     });
// });

// Smooth scrolling for navigation
document.querySelectorAll("nav ul li a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});
// 

// document.getElementById("contactForm").addEventListener("submit", async function (e) {
//     e.preventDefault(); // Prevent page reload

//     const name = document.querySelector("input[name='name']").value.trim();
//     const email = document.querySelector("input[name='email']").value.trim();
//     const message = document.querySelector("textarea[name='message']").value.trim();

//     if (!name || !email || !message) {
//         alert("❌ Please fill in all fields.");
//         return;
//     }

//     try {
//         const response = await fetch("/send-message", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ name, email, message }),
//         });

//         const result = await response.json();
//         alert(result.message); // ✅ Should show "Message sent successfully!"

//         document.getElementById("contactForm").reset();
//     } catch (error) {
//         console.error("❌ Error sending message:", error);
//         alert("Something went wrong!");
//     }
// });
// document.getElementById("contactForm").addEventListener("submit", async function (e) {
//     e.preventDefault(); // Stop page reload

//     // Get user input values
//     const name = document.querySelector("input[name='name']").value.trim();
//     const email = document.querySelector("input[name='email']").value.trim();
//     const message = document.querySelector("textarea[name='message']").value.trim();

//     // Validate fields before sending
//     if (!name || !email || !message) {
//         alert("❌ Please fill in all fields.");
//         return;
//     }

//     console.log("✅ Sending Data:", { name, email, message });

//     try {
//         const response = await fetch("http://localhost:3000/send-message", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ name, email, message }),
//         });

//         console.log("🔍 Checking server response...");

//         // Check if response is OK (Status 200-299)
//         if (!response.ok) {
//             console.error("❌ Server Response Error:", response.status);

//             // Try to extract JSON error if possible
//             let errorData;
//             try {
//                 errorData = await response.json();
//             } catch (jsonError) {
//                 console.error("❌ JSON Parsing Error:", jsonError);
//                 errorData = { error: "Unknown error (Possibly an HTML response or server issue)." };
//             }

//             alert(`Failed to send message: ${errorData.error || "Unknown Error"}`);
//             return;
//         }

//         const result = await response.json();
//         console.log("✅ Server Response:", result);
//         alert(result.message); // Should show "Message sent successfully!"

//         // Reset form fields after submission
//         document.getElementById("contactForm").reset();
//     } catch (error) {
//         console.error("❌ Fetch Error:", error);
//         alert(`Something went wrong! Error: ${error.message}`);
//     }
// });

// Scroll to Top Button
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

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Smooth scrolling for navigation
document.querySelectorAll("nav ul li a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Fade-in effect for sections
document.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
        const position = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight * 0.85) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
});
document.addEventListener("scroll", function () {
    const skillsSection = document.getElementById("skills");
    const position = skillsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (position < windowHeight * 0.85) {
        skillsSection.classList.add("animate-bars");
    }
});
// document.getElementById("contactForm").addEventListener("submit", function (e) {
//     e.preventDefault();

//     const name = document.querySelector("input[name='name']").value.trim();
//     const email = document.querySelector("input[name='email']").value.trim();
//     const message = document.querySelector("textarea[name='message']").value.trim();

//     if (!name || !email || !message) {
//         alert("Please fill in all fields.");
//         return;
//     }

//     fetch("/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, email, message }),
//     })
//     .then(response => response.json())
//     .then(data => {
//         alert("✅ Thank you, " + name + "! Your message has been sent.");
//         document.getElementById("contactForm").reset();
//     })
//     .catch(error => {
//         console.error("Error:", error);
//         alert("❌ Failed to send message.");
//     });
// });
document.getElementById("darkModeToggle").addEventListener("click", function () {
    // Smooth fade effect for mode change
    document.body.classList.toggle("dark-mode");
    document.body.style.transition = "background 0.5s ease-in-out, color 0.5s ease-in-out";

    // Save preference in local storage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

// Load previous theme on page refresh with animation
window.onload = function () {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
};



