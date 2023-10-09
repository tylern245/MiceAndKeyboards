function openMenu(evt, menuName, classname) {
    // Declare all variables
    var i, tablinks;

    hideElementsInClass(classname);
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.className += " active";
}



function showElement(id) {
    document.getElementById(id).removeAttribute("hidden");
}

function hideElement(id) {
    document.getElementById(id).setAttribute("hidden", "");
}

function makeFieldEditable(id)
{
    document.getElementById(id).removeAttribute("disabled");
}

function makeFieldUneditable(id)
{
    document.getElementById(id).setAttribute("disabled", "");
}

function hideElementsInClass(classname) {
    element = document.getElementsByClassName(classname);
    for (i = 0; i < element.length; i++) {
        element[i].style.display = "none";
    }
}

function showElementsInClass(classname) {
    element = document.getElementsByClassName(classname);
    for (i = 0; i < element.length; i++) {
        element[i].style.display = "";
    }
}


function hideShipping() {
    var checkbox = document.getElementById("checkbox");

    document.getElementById("shipping-form").style.display = "none";

    if (checkbox.checked == true)
    {
        document.getElementById("shipping-form").style.display = "none";
    }
    else
    {
        document.getElementById("shipping-form").style.display = "";
    }   
}

function sameBillingandShipping(){
    var collapsecheckbox = document.getElementById("shipping-address-check");

    var savevalue = document.getElementById("shipping-address-check-for-save");

    if (collapsecheckbox.checked == true)
    {
        savevalue.setAttribute("value", "yes");
    }
    else if (collapsecheckbox.checked == false)
    {
        savevalue.setAttribute("value", "");
    }
}

function emailValidation()
{
    const email = document.getElementById("email");
    const emailMessage = document.getElementById("email-message");

    const emailRegex = new RegExp('.*@.*\..*');

    var isvalid = true;

    if (!emailRegex.test(email.value)) {
        emailMessage.classList.add("text-danger", "mb-3");
        emailMessage.innerText = "* Please enter a valid email address.";
        isvalid = false;
    }

    if (isvalid == true) {
        if (emailMessage.classList.contains("text-danger")) {
            emailMessage.classList.remove("text-danger");
        }
    }

    return isvalid;
}

function editAccountInfo()
{
    hideElement('account-info-form');
    showElement('account-info-form_copy');
}

function editBilling()
{
    // makeFieldEditable('billingaddress');
    // makeFieldEditable('billingcity');
    // makeFieldEditable('billingstate');
    // makeFieldEditable('billingzipcode');

    // showElement('billingsavecancel');
    // hideElement('billing-e');

    hideElement('billing-address-form');
    showElement('billing-address-form_copy');
}


function editShipping()
{
    // makeFieldEditable('shippingaddress');
    // makeFieldEditable('shippingcity');
    // makeFieldEditable('shippingstate');
    // makeFieldEditable('shippingzipcode');

    // showElement('shippingcsavecancel');
    // hideElement('shipping-e');

    hideElement('shipping-address-form');
    showElement('shipping-address-form_copy');
}

function editPayment()
{
    // makeFieldEditable('cardholdername');
    // makeFieldEditable('cardno');
    // makeFieldEditable('cardmonth');
    // makeFieldEditable('cardyear');
    // makeFieldEditable('cardcvv');

    // showElement('paymentsavecancel');
    // hideElement('payment-e');

    hideElement('payment-form');
    showElement('payment-form_copy');
    document.getElementById("cardno_copy").setAttribute("value", "");
}

function saveEdit()
{
    setTimeout(function(){
        window.location.reload();
     }, 5000);
}


function cancelEdit()
{
    // account info
    showElement('account-info-form');
    hideElement('account-info-form_copy');

    // billing
    showElement('billing-address-form');
    hideElement('billing-address-form_copy');
    // makeFieldUneditable('billingaddress');
    // makeFieldUneditable('billingcity');
    // makeFieldUneditable('billingstate');
    // makeFieldUneditable('billingzipcode');
    // hideElement('billingsavecancel');
    // showElement('billing-e');

    // shipping
    showElement('shipping-address-form');
    hideElement('shipping-address-form_copy');
    // makeFieldUneditable('shippingaddress');
    // makeFieldUneditable('shippingcity');
    // makeFieldUneditable('shippingstate');
    // makeFieldUneditable('shippingzipcode');
    // hideElement('shippingsavecancel');
    // showElement('shipping-e');


    // payment
    hideElement('cardmonthlabel'); 
    hideElement('cardyearlabel'); 
    hideElement('cardcvvlabel');
    // makeFieldUneditable('cardholdername');
    // makeFieldUneditable('cardno');
    // makeFieldUneditable('cardmonth');
    // makeFieldUneditable('cardyear');
    // makeFieldUneditable('cardcvv');
    showElement('payment-form');
    hideElement('payment-form_copy');

    // hideElement('paymentsavecancel');
    // showElement('payment-e');


}