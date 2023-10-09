function showCart(itemList, target){
    var div = document.getElementById(target)
    var content
    var total = 0
    
    //do nothing if itemList is empty
    if(itemList === null) {
    return;
    }
    else {
    for(var item of itemList){
        const diva = document.createElement("div")
        const divb = document.createElement("div")
        const imga = document.createElement("img")
        const parb = document.createElement("p")
        const parb2 = document.createElement("p")
        const parc = document.createElement("p")
        const namePicDiv = document.createElement("div")
        const updateButton = document.createElement('input')
        const removeButton = document.createElement('input')
        const infoInput = document.createElement('input')
        const infoInput2 = document.createElement('input')
        const updateForm = document.createElement('form')
        const removeForm = document.createElement('form')
    
        const quantity = document.createElement("input")
        const qtyP = document.createElement("span")
        
        diva.classList.add("px-0", "border-top")
        parb2.innerText = item.brand + ' ' + item.name
        
        // ******* UPDATE, REMOVE, QUANTITY, and PRODUCT_ID BUTTONS
        updateForm.action = "index.php?page=cart"
        updateForm.method="post"
        removeForm.action = "index.php?page=cart"
        removeForm.method="post"
        updateForm.classList.add('col-6')
        removeForm.classList.add('col-6', 'g-0')
        
        //updateButton.innerText = "Update"
        updateButton.classList.add("col-5")
        updateButton.type = "submit"
        updateButton.name = "update"
        updateButton.value = "update"
        
        
        removeButton.classList.add("col-5")
        removeButton.type = "submit"
        removeButton.name = "remove"
        removeButton.value = "remove"
        
        quantity.type = "number"
        quantity.name = "quantity"
        quantity.value = item.quantity
        quantity.min = "0"
        quantity.max = "10"
        quantity.placeholder = "Quantity"
        quantity.classList.add("col-md-4", "col-4", 'mx-2')
        
        infoInput.type="hidden"
        infoInput.name = "product_id_update"
        infoInput.value = item.id
        
        infoInput2.type="hidden"
        infoInput2.name = "product_id_remove"
        infoInput2.value = item.id
        //END ******* UPDATE, REMOVE, QUANTITY, and PRODUCT_ID BUTTONS
        
        console.log("id is",item.id)
        qtyP.innerText = "Qty:"
        qtyP.classList.add("col-2", "my-2")
        divb.classList.add('row')
        parb.appendChild(divb)
        divb.appendChild(parb2)
        divb.appendChild(updateForm)
        divb.appendChild(removeForm)
        //update/remove forms
        updateForm.appendChild(qtyP)
        updateForm.appendChild(quantity)
        updateForm.appendChild(updateButton)
        removeForm.appendChild(removeButton)
        updateForm.appendChild(infoInput)
        removeForm.appendChild(infoInput2)
        
        imga.src = "assets/img/" + item.img
        imga.classList.add("w-100", "mt-2")
        parb.classList.add("col-9", "row", "float-start", "ps-2")
        parb2.classList.add("overflow-hidden")
        parc.appendChild(document.createTextNode("$" +item.price))
        parc.classList.add("col-1", "float-start", "text-end", "pe-2")
        namePicDiv.classList.add("col-2", "float-start")
        namePicDiv.appendChild(imga)
        diva.appendChild(namePicDiv)
        diva.appendChild(parb)
        diva.appendChild(parc)
        div.appendChild(diva)
        total += parseInt(item.price * item.quantity)
    }
    const tax = (Math.round((total * .0825)*100)/100).toFixed(2).toString()
    summaryBox(tax,total)
}

function summaryBox(tax, total){
    const sumDiv = document.getElementById('summary-box')
    const row1 = document.createElement('div')
    const row2 = document.createElement('div')
    const row3 = document.createElement('div')
    const row4 = document.createElement('div')
    const pSub1 = document.createElement('p')
    const pShip1 = document.createElement('p')
    const pTax1 = document.createElement('p')
    const pSub2 = document.createElement('p')
    const pShip2 = document.createElement('p')
    const pTax2 = document.createElement('p')
    const header = document.createElement('h4')
    const header2 = document.createElement('h3')
    const button = document.createElement('button')
    const buttonLink = document.createElement('a')
    row1.classList.add("row")
    row2.classList.add("row", "border-bottom", "border-dark")
    pSub1.classList.add("col-6")
    pShip1.classList.add("col-6")
    pTax1.classList.add("col-6")
    pSub2.classList.add("col-3", "offset-md-3")
    pShip2.classList.add("col-3", "offset-md-3")
    pTax2.classList.add("col-3", "offset-md-3")
    //header.classList.add("text-center", "pt-2")

    pSub1.innerHTML = "<b>Subtotal:</b>"
    pShip1.innerText = "Standard Shipping:"
    pTax1.innerText = "Estimated Tax:"
    pSub2.innerText = "$"+total.toString()
    pShip2.innerText = "$5"
    pTax2.innerText = "$"+tax.toString()

    row3.classList.add("row")
    row4.classList.add("row", "pb-4", "pt-4")
    //header2.classList.add("text-center", "pt-2")
    buttonLink.classList.add("mx-auto", "w-50")
    buttonLink.href = "index.php?page=checkout"
    button.classList.add("btn-danger", "btn")
    button.innerText = "Continue to Checkout"
    buttonLink.appendChild(button)
    //row1.appendChild(header)
    row2.appendChild(pSub1)
    row2.appendChild(pSub2)
    row2.appendChild(pShip1)
    row2.appendChild(pShip2)
    row2.appendChild(pTax1)
    row2.appendChild(pTax2)
    //row3.appendChild(header2)
    row4.appendChild(buttonLink)
    //sumDiv.appendChild(row1)
    sumDiv.appendChild(row2)
    sumDiv.appendChild(row3)
    sumDiv.appendChild(row4)
  }
}
