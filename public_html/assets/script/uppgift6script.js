"use strict";

var calculatorNumber = document.getElementsByClassName("calc__number");
var calculatorSign = document.getElementsByClassName("calc__sign");
var calcDisplayResult = document.getElementById("result");
var numberArray = new Array();
for(var i = 0; i < calculatorNumber.length; i++){
    calculatorNumber[i].addEventListener("click", calcListener);
}
for(var i = 0; i < calculatorSign.length; i++){
    calculatorSign[i].addEventListener("click", signListener);
}

function calcListener(){
    display(this.innerHTML);
    numberArray.push(this.innerHTML);
    console.log(numberArray);
};

function signListener(){
    display(this.innerHTML);
    if(this.innerHTML === "="){
        
    }
};

function display(value){
    calcDisplayResult.innerHTML += value;
};

function addition(a, b){
    return a + b;
 
    
    /*var num1 = numberArray[0];
    var num2 = numberArray[1];
    var sum = num1 + num2;
    console.log("hej " + sum);
    return sum;*/


};

function subtraction(a, b){
    return a - b;
};





