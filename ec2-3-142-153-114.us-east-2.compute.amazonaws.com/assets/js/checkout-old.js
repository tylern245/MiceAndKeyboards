function swapToHide(toHide, toShow) {
    document.getElementById(toShow).classList.remove("d-none");
    document.getElementById(toHide).classList.add("d-none");
}

function diffBilling() {
    const dropdown = document.getElementById("change-billing");

    if (dropdown.classList.contains("d-none"))
        dropdown.classList.remove("d-none");

    else
        dropdown.classList.add("d-none");

}

function makeAddressCards(targetDiv, radio, cardList, header =''){
    var div = document.getElementById(targetDiv);
    var content;
    
    for(var card of cardList){
        const divCol = document.createElement("div");
        const divCard = document.createElement("div");
        const divCardBody = document.createElement("div");
        const hTitle = document.createElement("h5");
        const pStreet = document.createElement("p");
        const pAddress = document.createElement("p");
        const iCheck = document.createElement("input");

        divCol.classList.add("col-sm-6", "my-2");
        divCard.classList.add("card");
        divCardBody.classList.add("card-body", "p-3");
        hTitle.classList.add("card-title");
        pStreet.classList.add("card-text", "mb-0");
        pAddress.classList.add("card-text", "mb-0");
        iCheck.classList.add("form-check-input", "ms-0");
        iCheck.type = "radio";
        iCheck.name = radio;
        iCheck.id = radio;
        
        content = document.createTextNode(card.name)
        hTitle.appendChild(content);
        pStreet.appendChild(document.createTextNode(card.street))
        pAddress.innerText = card.address;
        divCardBody.appendChild(hTitle);
        divCardBody.appendChild(pStreet);
        divCardBody.appendChild(pAddress);
        divCardBody.appendChild(iCheck);
        divCard.appendChild(divCardBody);
        divCol.appendChild(divCard);
        div.prepend(divCol);
        div.classList.add("row");
    }
    if(header !=''){
        const newHeader = document.createElement("h5");
        newHeader.innerText = header;
        newHeader.classList.add("my-2");
        div.prepend(newHeader);
    }
}

function makePaymentCards(targetDiv, radio, cardList){
    const div = document.getElementById(targetDiv);
    for(var card of cardList){
        const divCol = document.createElement("div");
        const divCard = document.createElement("div");
        const divCardBody = document.createElement("div");
        const hTitle = document.createElement("h5");
        const pStreet = document.createElement("p");
        const iCheck = document.createElement("input");

        divCol.classList.add("col-sm-6", "my-2");
        divCard.classList.add("card");
        divCardBody.classList.add("card-body", "p-3");
        hTitle.classList.add("card-title");
        pStreet.classList.add("card-text", "mb-0");
        iCheck.classList.add("form-check-input", "ms-0");
        iCheck.type = "radio";
        iCheck.name = radio;
        iCheck.id = radio;
        
        hTitle.appendChild(document.createTextNode(card.name));
        pStreet.appendChild(document.createTextNode(card.type + " ending in: " + card.number))
        divCardBody.appendChild(hTitle);
        divCardBody.appendChild(pStreet);
        divCardBody.appendChild(iCheck);
        divCard.appendChild(divCardBody);
        divCol.appendChild(divCard);
        div.prepend(divCol);
        div.classList.add("row");
    }
}