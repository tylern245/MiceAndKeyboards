function signInValidation() {
    const email = document.getElementById("email");
    const emailMessage = document.getElementById("email-message");
    const passwordMessage = document.getElementById("password-message");
    var isValid = true;
    const emailRegex = new RegExp('.*@.*\..*');

    passwordMessage.innerText = "";

    if (passwordMessage.classList.contains("text-danger")) {
        passwordMessage.classList.remove("text-danger");
    }

    if (!emailRegex.test(email.value)) {
        isValid = false;
    }

    if (password.value.length < 8) {
        isValid = false;
    }

    if (isValid == true) {
        //check database for email and password match

        //go to homepage and load account page

        //if admin add admin page
    }
    else {
        passwordMessage.classList.add("text-danger", "mb-3", "mt-3");
        passwordMessage.innerText = "* Invalid email and/or password.";
    }
}