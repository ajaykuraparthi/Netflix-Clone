document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");

    // Dummy authentication (Replace this with real authentication logic)
    if (username === "admin" && password === "password123") {
        alert("Login successful!");
        window.location.href = "./index.html"; // Redirect to dashboard
    } else {
        errorMessage.textContent = "Invalid username or password.";
    }
});
