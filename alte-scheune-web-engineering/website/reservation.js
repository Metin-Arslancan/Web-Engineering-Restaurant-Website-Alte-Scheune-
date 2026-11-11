document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("reservationForm");
    const emailField = document.getElementById("email");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const emailValue = emailField.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Prüfen ob E-Mail korrekt ist
        if (!emailPattern.test(emailValue)) {
            emailField.classList.add("error");
            return;
        } else {
            emailField.classList.remove("error");
        }

        //Wenn alles korrekt ist:
        window.location.href = "Mail.html";
    });

    // Mailfeld live prüfen (für rote Umrandung)
    emailField.addEventListener("input", () => {
        const emailValue = emailField.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailPattern.test(emailValue)) {
            emailField.classList.remove("error");
        }
    });
});
