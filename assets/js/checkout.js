function showCart(itemList, couponsList, doesCouponExist, target){
    var div = document.getElementById(target)
    var couponIdDiv = document.getElementById("couponIdDiv")
    //set coupon IdDiv if coupon exists
    if(doesCouponExist == "1") {
    console.log(couponsList)
    couponIdDiv.classList.add("text-start", "text-success")
    couponIdDiv.innerText = "Coupon code applied: " + couponsList.couponId
    }
    for(var item of itemList){
        const diva = document.createElement("div")
        const imga = document.createElement("img")
        const namePicDiv = document.createElement("div")
        const priceDiv = document.createElement("div")
        const a = document.createElement("a")
       
        diva.classList.add("px-0", "border-top", "row")
        imga.src = "assets/img/" + item.img
        imga.classList.add("w-100", "mt-2")
        a.classList.add("col-5", "float-start")
        namePicDiv.appendChild(imga)
        a.href = "index.php?page=item&id=" + item.id
        //priceDiv.innerText = 'x'+item.quantity + ': $' + item.price * item.quantity
       // + '\n($' + item.price + ' ea.)'
        
        priceDiv.innerHTML = '($' + item.price + ' ea.)</br>' 
        //If the item is a target of a coupon
        if(item.isTarget === "1") {
        priceDiv.innerHTML += '<span style="color:green;">($' + item.couponPrice + ' ea.)</br></span>'
        priceDiv.innerHTML += 'x'+item.quantity + ': $' + (item.couponPrice * item.quantity).toFixed(2)
        }
        //If the item does not qualify for a coupon
        else {
        priceDiv.innerHTML += 'x'+item.quantity + ': $' + item.price * item.quantity
        }
        priceDiv.classList.add("col-7", "text-end")
        a.appendChild(namePicDiv)
        diva.appendChild(a)
        diva.appendChild(priceDiv)
        div.appendChild(diva)
        
    }
    
    calcTotal(itemList)
}


function alert (isValidString, enteredCode, isCouponCode, couponDesc, couponId, target) {
//isValidString checks if its empty, isCouponCode is if a coupon code was entered, couponId is the coupon ID
//console.log(isCouponCode)
const targetDiv = document.getElementById(target)
var empty = ""
var stringCheck = enteredCode.toString().localeCompare(empty)
//console.log(stringCheck)
//console.log(isValidString)

if(isValidString == 1 && isCouponCode == 1) {
//success message
targetDiv.classList.add("alert", "alert-success", "w-75")
targetDiv.role = "alert"
targetDiv.innerHTML = "Coupon code \"" + couponId + "\" applied successfully! </br> * " + couponDesc;
//<div class="alert alert-success" role="alert">
//  A simple success alert—check it out!
//</div>

}
else if(isValidString == 0 && isCouponCode == 1 &&  stringCheck != 0) {
//danger message
targetDiv.classList.add("alert", "alert-danger", "w-75")
targetDiv.role = "alert"
targetDiv.innerText = "Invalid coupon code."
//<div class="alert alert-success" role="alert">
//  A simple success alert—check it out!
//</div>

}
//isCouponCode is 1 if anything was entered, even blank (isset)


}

function checkRadio(name) {

console.log(name)
if(name == "shippingRadio20") {
document.getElementById("ship20").checked = true;
document.getElementById("ship5").checked = false;
}
else {
document.getElementById("ship5").checked = true;
document.getElementById("ship20").checked = false;

}

}

function calcTotal(itemList){
    var subtotal = 0.0
    var total = 0.0
    var shipping = 0
    
    var totalP = document.getElementById("total")
    var taxP = document.getElementById("tax")
    var shippingP = document.getElementById("shipping")
    var subtotalP = document.getElementById("subtotal")
    var ship5 = document.getElementById("ship5")
    var ship20 = document.getElementById("ship20")
    
    for(var item of itemList){
        //Add item subtotal to total for each item
        if(item.isTarget === "1") {
        subtotal += (item.couponPrice * item.quantity)
        }
        else {
        subtotal += (item.price * item.quantity)
        }
    
    }
    
    const tax = (Math.round((subtotal * .0825)*100)/100).toFixed(2)

     //Fill out shipping total
        if (ship5.checked) {
         shipping = ship5.value
         shippingP.innerText = "Shipping & Handling: $" + ship5.value;
         }
         else {
         shipping = ship20.value
         shippingP.innerText = "Shipping & Handling: $" + ship20.value;
         }
         
     //Item subtotal
       subtotalP.innerText = "Subtotal: $" + subtotal
       
     //Tax
       taxP.innerText = "Tax(8.25%): $" + tax 
        
     //Total total (note: shipping is untaxed)
      total = (+subtotal + +tax + +shipping).toFixed(2)
      totalP.innerText = "Total: $" + total
}

function setForm(){
//set hidden fields (from form values) to be sent to placeorder.php 
document.getElementById("firstName-shipping").value = document.getElementById("firstNameShipping").value
document.getElementById("lastName-shipping").value = document.getElementById("lastNameShipping").value
document.getElementById("address-shipping").value = document.getElementById("addressShipping").value
document.getElementById("zipCode-shipping").value = document.getElementById("zipCodeShipping").value
document.getElementById("city-shipping").value = document.getElementById("cityShipping").value
document.getElementById("state-shipping").value = document.getElementById("stateShipping").value
document.getElementById("firstName-billing").value = document.getElementById("firstNameBilling").value
document.getElementById("lastName-billing").value = document.getElementById("lastNameBilling").value
document.getElementById("address-billing").value = document.getElementById("addressBilling").value
document.getElementById("zipCode-billing").value = document.getElementById("zipCodeBilling").value
document.getElementById("city-billing").value = document.getElementById("cityBilling").value
document.getElementById("state-billing").value = document.getElementById("stateBilling").value
document.getElementById("name-payment").value = document.getElementById("namePayment").value
document.getElementById("cardNumber-payment").value = document.getElementById("cardNumber").value
document.getElementById("expirationDateMM-payment").value = document.getElementById("expirationDateMM").value
document.getElementById("expirationDateYY-payment").value = document.getElementById("expirationDateYY").value
document.getElementById("securityCode-payment").value = document.getElementById("securityCode").value

//check which shipping radio is selected
if(document.getElementById("ship5").checked) {
document.getElementById("shippingSelect").value = document.getElementById("ship5").value
}
else {
document.getElementById("shippingSelect").value = document.getElementById("ship20").value
}

//check if coupon is entered
if((document.getElementById("couponCode").value).localeCompare("") != 0) {
document.getElementById("couponEntered").value = document.getElementById("couponCode").value
}

//submit place order button -> go to placeorder.php (above values can be accessed as $_POST)
document.getElementById('placeOrderForm').submit();

}







