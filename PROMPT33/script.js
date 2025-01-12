const form = document.getElementById("thanks");
        const successMessage =
            document.getElementById("congo");

        form.addEventListener("submit", function (e) {
            e.preventDefault();
            successMessage.style.display = "block";
        });