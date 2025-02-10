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
let nameCard , number , yearExp , monthExp , cvcBool = false;

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
        nameCard = true ;
    }else{
        publickStyleEles(inputCardName,spanElem)
        nameCard = false ;
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
        number = true ;
    }else{
        inputCardNumber.type = "number" ;
        publickStyleEles(inputCardNumber,spanElem) ;
        number = false ;
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
            yearExp = true ;
            if (spanElem) {
                spanElem.remove();
            }else{
                yearExp = false ;
                publickStyleEles(inputCardExpYy,spanElem)
            }
        }
    }else{
        inputCardExpYy.type = "number" ;
        publickStyleEles(inputCardExpYy,spanElem) ;
        yearExp = false ;
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
            monthExp = true ;
            if (spanElem) {
                spanElem.remove();
            }
        }else if (inputCardExpMm.value == yearNow) { 
            if (inputCardExpMm.value < monthNow) {
                publickStyleEles(inputCardExpMm,spanElem) ;
                monthExp = false ;
            } else{
                inputCardExpMm.style.border = "4px double #3A7D44";
                monthExp = true ;
                if (spanElem) {
                    spanElem.remove();
                }
            } 
        }
    }else{
        inputCardExpMm.type = "number" ;
        publickStyleEles(inputCardExpMm,spanElem) ;
        monthExp = false ;
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
        cvcBool = true ;
    }else{
        inputCardCvc.type = "number" ;
        cvcBool = false ;
        publickStyleEles(inputCardCvc,spanElem) ;
    }
    
    backNumber.innerHTML = inputCardCvc.value ;
}

inputCardCvc.addEventListener("input" , cvcFunc)

// submit button 

let inputTags = document.getElementsByClassName("input-tag") ;

btn.addEventListener("click" , function (event) {
    if (nameCard && number && yearExp && monthExp && cvcBool) {

        for (let index of inputTags) {
            let spanElem = index.parentElement.querySelector("span") ;
            if (spanElem) {
                spanElem.remove() ;
            }
            index.value = "" ;
            index.style.border = "1px solid purple" ;
        }

        cardName.innerHTML = "JANE APPLEESID" ;
        cardNumber.innerHTML = "0000 0000 0000 0000" ;
        cardYearExp.innerHTML = "00" ;
        cardMonthExp.innerHTML = "00" ;
        backNumber.innerHTML = "000" ;   
    }else{
        event.preventDefault() ;
    }
})