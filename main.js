const cardNumber = document.getElementById("card-number-show");
const cardName = document.getElementById("name-show");
const cardYearExp = document.getElementById("year");
const cardMonthExp = document.getElementById("month");
const backNumber = document.getElementById("back-number");
const inputCardName = document.getElementById("card-name");
const inputCardNumber = document.getElementById("card-number");
const inputCardCvc = document.getElementById("cvc");
const inputCardExpYy = document.getElementById("exp-yy");
const inputCardExpMm = document.getElementById("exp-mm");
const btn = document.getElementById("btn");

// a pulick style for fals value of input

function publickStyleEles(params,spanElem) {

    params.style.border = "4px double #B82132" ;
    if(!spanElem){
        const spanCreate = document.createElement("span");
        spanCreate.style.color = "#B82132" ;
        spanCreate.style.display = " block" ;
        spanCreate.innerHTML = "value is not true!" ;
        params.parentElement.appendChild(spanCreate);
    }
}

// name input 

function nameFunc() {
    let spanElem = inputCardName.parentElement.querySelector("span");

    if (inputCardName.value.length >= 7) {
        inputCardName.style.border = "4px double #3A7D44";
        if (spanElem) {
            spanElem.remove();
        }
    }else{
        publickStyleEles(inputCardName,spanElem)
    }

    cardName.innerHTML = inputCardName.value ;
}

inputCardName.addEventListener("input" , nameFunc)

// card number input

function numberFunc() {
    let spanElem = inputCardNumber.parentElement.querySelector("span");

    if (inputCardNumber.value.length == 16) {
        inputCardNumber.style.border = "4px double #3A7D44";
        inputCardNumber.type = "text" ;
        if (spanElem) {
            spanElem.remove();
        }
    }else{
        inputCardNumber.type = "number" ;
        publickStyleEles(inputCardNumber,spanElem) ;
    }
    
    cardNumber.innerHTML = inputCardNumber.value ;
}

inputCardNumber.addEventListener("input" , numberFunc)

// Exp part input year

function expYearFunc() {
    let spanElem = inputCardExpYy.parentElement.querySelector("span");
    let date = new Date();
    let yearNow = date.getFullYear() ;
 
    if (inputCardExpYy.value.length == 4) {
        inputCardExpYy.type = "text" ;
        if (inputCardExpYy.value >= yearNow) {
            inputCardExpYy.style.border = "4px double #3A7D44";
            if (spanElem) {
                spanElem.remove();
            }else{
                publickStyleEles(inputCardExpYy,spanElem)
            }
        }
    }else{
        inputCardExpYy.type = "number" ;
        publickStyleEles(inputCardExpYy,spanElem) ;
    }
    
    cardYearExp.innerHTML = inputCardExpYy.value ;
}

inputCardExpYy.addEventListener("input" , expYearFunc) ;

// Exp part input month

function expMonthFunc() {
    let spanElem = inputCardExpMm.parentElement.querySelector("span");
    let date = new Date();
    let yearNow = date.getFullYear() ;
    let monthNow = date.getMonth() ;
 
    if (inputCardExpMm.value.length == 2) {
        inputCardExpMm.type = "text" ;
        if (inputCardExpYy.value > yearNow ) {
            inputCardExpMm.style.border = "4px double #3A7D44";
            if (spanElem) {
                spanElem.remove();
            }
        }else if (inputCardExpMm.value == yearNow && inputCardExpMm.value < monthNow) {   
            publickStyleEles(inputCardExpMm,spanElem)
        }
    }else{
        inputCardExpMm.type = "number" ;
        publickStyleEles(inputCardExpMm,spanElem) ;
    }
    
    cardMonthExp.innerHTML = inputCardExpMm.value ;
}

inputCardExpMm.addEventListener("input" , expMonthFunc);

// Exp part input cvc

function cvcFunc() {
    let spanElem = inputCardCvc.parentElement.querySelector("span");
 
    if (inputCardCvc.value.length == 3) {
        inputCardCvc.style.border = "4px double #3A7D44";
        inputCardCvc.type = "text" ;
        if (spanElem) {
            spanElem.remove();
        }

    }else{
        inputCardCvc.type = "number" ;
        publickStyleEles(inputCardCvc,spanElem) ;
    }
    
    backNumber.innerHTML = inputCardCvc.value ;
}

inputCardCvc.addEventListener("input" , cvcFunc)