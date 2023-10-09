function hideShipping() {
    var checkbox = document.getElementById("shipping-address-check");

    if (checkbox.checked == true)
    {
        // document.getElementById("shipping-address-form-div").setAttribute("class", "form-check-input");
        document.getElementById("shipping-address-form-div").setAttribute("class", "collapsing");
        document.getElementById("shipping-address-form-div").setAttribute("class", "collapse");
    }
    else
    {
        document.getElementById("shipping-address-form-div").setAttribute("class", "collapsing");
        document.getElementById("shipping-address-form-div").setAttribute("class", "collapse show");
        // document.getElementById("shipping-address-form-div").style.display = "";
    }   
}


function createAccountValidation() {
    //get form values
    const button = document.getElementById("create-button");
    const password = document.getElementById("password");
    const passwordConfirm = document.getElementById("password-confirm");
//  const name = document.getElementById("name");
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const email = document.getElementById("email");
    const passwordMessage = document.getElementById("password-message");
    const emailMessage = document.getElementById("email-message");
    const passwordLen = 8;
    var isFound = 0;

    //bool for valid/invalid
    var isvalid = true;

    //set the messages to blank
    passwordMessage.innerText = "";
    emailMessage.innerText = "";

    //regex for valid email
    const emailRegex = new RegExp('.*@.*\..*');
    const passwordRegex = new RegExp('^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{8,}$');


    //validation 
    if ((!passwordRegex.test(password.value)) ||
       ((isFound = password.value.search(/[!@#\$%\^\&*\)\(+=._-]/)) == -1) ||
       ((isFound = password.value.search(/[A-Z]/)) == -1) ||
       ((isFound = password.value.search(/[a-z]/)) == -1) ){

        passwordMessage.classList.add("text-danger", "mb-3");
        passwordMessage.innerText += "*Passwords must be at least 8 characters long, \
                                       contain both uppercase and lowercase characters, \
                                       and contain at least 1 special character e.g. !@#$%^&*()+=._-\n"
                                  
                                   
        isvalid = false;
    }

    if (password.value.localeCompare(passwordConfirm.value) != 0) {
        passwordMessage.classList.add("text-danger", "mb-3");
        passwordMessage.innerText += "*Password and Confirm Password fields must match.\n";
        isvalid = false;
    }

    if (!emailRegex.test(email.value)) {
        emailMessage.classList.add("text-danger", "mb-3");
        emailMessage.innerText = "* Please enter a valid email address.";
        isvalid = false;
    }

    if (isvalid == true) {
        if (passwordMessage.classList.contains("text-danger")) {
            passwordMessage.classList.remove("text-danger");
        }
        if (emailMessage.classList.contains("text-danger")) {
            emailMessage.classList.remove("text-danger");
        }
        const form = document.getElementById("form");
        const header = document.getElementById("header");
        //Change the page for success
        button.onclick = "";
        //button.classList.add("d-none");
        header.classList.add("text-success");
        header.innerText = "Success!";
        const p = document.createElement("p");
        p.classList.add("text-center");
        p.innerText = "Your account has been created.";
        form.classList.add("d-none");
        form.parentNode.insertBefore(p, form);
        const aSignin = document.createElement("a");
        aSignin.href = "index.php?page=create-account.php";
        aSignin.classList.add("text-center", "mx-auto", "d-block");
        aSignin.innerText = "Sign In";
        form.parentNode.insertBefore(aSignin, form.nextSibling);
    }
}
