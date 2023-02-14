function buyInputFiled(id){
    const filed = document.getElementById(id);
    const buyFiledStr = filed.value ;
    const buyFiledValue = parseFloat(buyFiledStr);
    filed.value = " "
    return buyFiledValue;
}

function productPriceGet (id) {
    const price = document.getElementById(id);
    const priceStr = price.innerText;
    const priceValue = parseFloat(priceStr);
    return priceValue;
}

function setTheValueOfBuyItem (id,value) {
    const values = document.getElementById(id)
    values.innerText = value
}