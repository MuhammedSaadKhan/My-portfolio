// Contact Form Validation
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
    } else {
        alert("Message sent successfully!");
        document.getElementById("contact-form").reset();
    }
});

// Dark Mode Toggle
document.getElementById("dark-mode-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    let mode = document.body.classList.contains("dark-mode") ? "Dark" : "Light";
    this.textContent = mode === "Dark" ? "☀️" : "🌙";
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll("nav ul li a").forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        let targetId = this.getAttribute("href").substring(1);
        let targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 50,
            behavior: "smooth"
        });
    });
});