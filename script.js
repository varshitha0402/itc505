document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registrationForm");

    form.onsubmit = function(event) {
        const password = document.getElementById("password").value.trim();
        const confirmPassword = document.getElementById("confirmPassword").value.trim();
        const email = document.getElementById("email").value.trim();
        const notRobot = document.getElementById("notRobot").checked;

        let errors = [];

        if (!password || !confirmPassword) {
            errors.push("Password fields cannot be empty.");
        } else if (password !== confirmPassword) {
            errors.push("Passwords do not match.");
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            errors.push("Please enter a valid email address.");
        }

        if (!notRobot) {
            errors.push("You must confirm you are not a robot.");
        }

        if (errors.length > 0) {
            alert(errors.join("\n"));
            event.preventDefault();
            return false;
        }

        alert("Form submitted successfully!");
        return true;
    };
});
