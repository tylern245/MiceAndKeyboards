function showItems(items){

    for(var item of items) {
    const boxDiv = document.createElement("a")
    const nameP = document.createElement("p")
    const priceP = document.createElement("p")
    const image = document.createElement("img")
    const titleDiv = document.createElement("div")
    const itemsDiv = document.getElementById("itemsDiv")
    
    nameP.innerText = item.brand + " " + item.name
    priceP.innerText = "$" + item.price
    image.src = "/assets/img/" + item.img
    
    titleDiv.classList.add("row")
    nameP.classList.add("col-10")
    priceP.classList.add("col-2")
    boxDiv.classList.add("col-4", "px-5", "py-3", "mx-auto", "box", "rounded-3")
    boxDiv.href = "index.php?page=item&id=" + item.id
    image.classList.add("w-100")
    
    titleDiv.appendChild(nameP)
    titleDiv.appendChild(priceP)
    boxDiv.appendChild(titleDiv)
    boxDiv.appendChild(image)
    
    itemsDiv.appendChild(boxDiv)
    }
    
    }