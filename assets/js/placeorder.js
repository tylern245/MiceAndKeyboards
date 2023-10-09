function showItems(items, coupon, shipping, targetDiv){
    const couponDiv = document.getElementById("couponDiv")
    const totalDiv = document.getElementById("totalDiv")
    const taxDiv = document.getElementById("taxDiv")
    var total = 0.0
    var origTotal = 0.0
    var totalSaved = 0.0
    if(coupon != null) {
    //calculate coupon % off
    var percentOff = ((+1.00 - +parseFloat(coupon.amount))*100).toFixed(2)
    }
    
    for(var item of items) {
    const boxDiv = document.createElement("div")
    const image = document.createElement("img")
    const itemsDiv = document.getElementById(targetDiv)
    const containerDiv = document.createElement("div")
    const words = document.createElement("p")
    image.src = "/assets/img/" + item.img
    
    containerDiv.classList.add("bg-white", "col-2", "m-1", "p-1")
    image.classList.add("img-thumbnail")
      
    words.innerHTML += item.brand + " " + item.name + " <br>Qty: " + item.quantity + "<br>"
    
    if(item.isTarget === "1") {
        words.innerHTML += '<s>$' + item.price + '</s> <span style="color:green;">($' + item.couponPrice + ' ea.)</br></span>'
        words.innerHTML += "$" + item.couponPrice * item.quantity
        total += item.couponPrice * item.quantity
        totalSaved += ( (item.price - item.couponPrice) * item.quantity)
        console.log(totalSaved)
    }
        //If the item does not qualify for a coupon
    else {
        words.innerHTML += '($' + item.price + ' ea.)<br>'
        words.innerHTML += "$" + item.price * item.quantity
        total += item.price * item.quantity
    }
    //total without coupon
    origTotal += item.price * item.quantity
    
    boxDiv.appendChild(image)
    boxDiv.appendChild(words)
    containerDiv.appendChild(boxDiv)
    
    itemsDiv.appendChild(containerDiv)
    }
    //round total and total saved and order total
    totalSaved = totalSaved.toFixed(2)
    total = total.toFixed(2)
    //calculate tax
     const tax = (Math.round((total * .0825)*100)/100).toFixed(2)
     //order total
     var orderTotal = +total + +tax + +shipping
     orderTotal = orderTotal.toFixed(2)
     origTotal = +origTotal + +tax + +shipping
     origTotal = origTotal.toFixed(2)
    //If coupon exists, print the code
    if(coupon != null) {
    //total saved
    couponDiv.innerHTML += '<span style="color:green;">Coupon: ' + coupon.couponId + ' (' + percentOff + '% off ' + coupon.couponTarget + ')</span><br>'
    //only show strikethrough if customer saved money
    if(totalSaved > 0.0) {
    totalDiv.innerHTML += '<h5><b>Total</b>: $<s>' + origTotal + '</s>' + '  <span style="color:green;">$' + orderTotal + '</span></h5>(<span style="color:green;">Saved $' + totalSaved + '</span>)<br>'
    }
    else{
    totalDiv.innerHTML += '<h5><b>Total</b>: $' + orderTotal + '</h5>(<span style="color:green;">Saved $' + totalSaved + '</span>)<br>'
    }
    
    
    }
    else {
    totalDiv.innerHTML += '<h5><b>Total</b>: $' + orderTotal + '</h5>'
    }
    taxDiv.innerHTML += '$' + tax + ' tax<br>'
    
}

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

function returnTotal(itemList){
    var subtotal = 0.0
    var total = 0.0
    var shipping = 0
    
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
         }
         else {
         shipping = ship20.value
         }
         
        
     //Total total (note: shipping is untaxed)
      total = (+subtotal + +tax + +shipping).toFixed(2)
      return total
}