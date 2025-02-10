document.getElementById("password").addEventListener("input", function () {
    let password = this.value;
    let strengthText = document.getElementById("strength");

    if (password.length >= 12) {
        strengthText.textContent = "Strength: Invalid (Too long)";
        strengthText.className = "invalid";
    } else if (password.length >= 8 && password.length < 12 &&
        password.match(/[A-Z]/) &&
        password.match(/\d/) &&
        password.match(/[!@#$%^&*(),.?":{}|<>]/)) {
        strengthText.textContent = "Strength: Strong";
        strengthText.className = "strong";
    } else if (password.length >= 6 && password.match(/\d/)) {
        strengthText.textContent = "Strength: Medium";
        strengthText.className = "medium";
    } else if (password.length < 6) {
        strengthText.textContent = "Strength: Weak";
        strengthText.className = "weak";
    }
});
