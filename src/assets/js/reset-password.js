function resetPasswordValidation() {
    const message = document.getElementById("message");
    const collapseDiv = document.getElementById("messageCollapse");
    const email = document.getElementById("email");
    const re = new RegExp('.*@.*\..*');
    message.innerText = "";
    if (re.test(email.value)) {
        if(message.classList.contains("text-danger")){
            message.classList.remove("text-danger");
        }
        message.appendChild(document.createTextNode("If the email address was registered to an account, instructions to reset the password were sent."));
        const button = document.getElementById("reset-button");
        const label = document.getElementById("label");
        const link = document.getElementById("cancel-link");
        const header = document.getElementById("header");
        const description = document.getElementById("description");
        button.onclick = "";
        email.classList.add("d-none");
        button.classList.add("d-none");
        label.classList.add("d-none");
        link.innerText="Sign In";
        header.classList.add("text-success");
        header.innerText = "Success!";
        description.classList.add("d-none");
    } else {
        message.classList.add("text-danger");
        message.appendChild(document.createTextNode("Please enter a valid email address."));
    }
}