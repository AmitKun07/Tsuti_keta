document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Simulating form submission (You can later replace this with an actual backend API)
    document.getElementById("response-message").textContent = "Thank you for reaching out! We'll get back to you soon.";
    document.getElementById("contact-form").reset();
});
