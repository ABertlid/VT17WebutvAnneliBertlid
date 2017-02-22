"use strict";

var idNumber = document.getElementById("idNumber");
idNumber.addEventListener("input", socialSecurityNumber);

var leapYear = document.getElementById("leapYear");
leapYear.addEventListener("input", leapYearNumber);

var numberSum = document.getElementById("numberSum");
numberSum.addEventListener("input", numberSumNumber);

function socialSecurityNumber(){

    var number = idNumber.value;
        if(number.length === 10 || number.length === 12){
            if(number.length === 12){
                number = number.slice(2);
            }
            var sum = 0;
            for(var i = 0; i < number.length; i++){
                var digit = parseInt(number.charAt(i));
                if(i % 2 === 0){
                    digit *=2;
                }
                if(digit > 9){
                    digit -=9;   
                }
                sum += digit;
            }    
                if((sum % 10) === 0){
                    return document.getElementById("idNumberResult").innerHTML = "stämmer";
                }
                else{ 
                    return document.getElementById("idNumberResult").innerHTML = "FEL!";
                }
        }
};
function leapYearNumber(){
    
    var year = leapYear.value;
    if(year.length === 4){
        for(var i = 0; i < year.length; i++){  
            if((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)){

                return document.getElementById("leapYearResult").innerHTML = "skottår";
            }
            else
                return document.getElementById("leapYearResult").innerHTML = "EJ skottår";
        }
    }
};
function numberSumNumber(){

    var sum = numberSum.value;
    var sifSum = 0;
    for(var i = 0; i < sum.length; i++){    
        var no = Number(sum[i]);
        sifSum += no;
    }
    return document.getElementById("numberSumResult").innerHTML = sifSum;
};