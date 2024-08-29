// let input1=document.querySelector("#input1");
// let input2=document.querySelector("#input2");
// let input3=document.querySelector("#input3");
// let result=document.querySelector("result");


let digits = document.querySelector("#digits");
// let btn1=document.querySelector("#btn1");
// let btn2=document.querySelector("#btn2");
// let btn3=document.querySelector("#btn3");

// btn1.addEventListener("click",clickHandler);
// btn2.addEventListener("click",clickHandler);
// btn3.addEventListener("click",clickHandler);
let operand1 = 0;
let operator = "";
let isNew = false;
let elements = document.querySelectorAll(".btns");
elements.forEach(function (element) {
    element.addEventListener("click", clickHandler);

})
let operate = document.querySelectorAll(".operate");
operate.forEach(function (element) {
    element.addEventListener("click", operation);

})
function operation(e) {
    let target = e.target;
    if (target.innerText == "+") {
        operand1 = parseInt(digits.innerText);
        operator = "+";
        isNew = true;


    }

    if (target.innerText == "=") {
        let operand2 = parseInt(digits.innerText);
        let resultData = operand1 + operand2;
        digits.innerText = resultData;
        operand1 = 0;
        isNew = true;



    }

}
function clickHandler(e) {
    if (digits.innerText == "0")
        digits.innerText = "";
    if (isNew == true) {
        digits.innerText = "";
        isNew = false;
    }


    let target = e.target;
    digits.innerText += target.innerText;



}    
