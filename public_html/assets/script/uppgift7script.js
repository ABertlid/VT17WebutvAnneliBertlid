"use strict";
//API-nyckel: 19dd5f4ce90b7ee6

    var ingredientsArray = new Array();
    var portions = document.getElementById("portions");
    var asideLeft = document.getElementsByTagName("aside")[0];
    var numPortions = asideLeft.getElementsByTagName("li");
    var stars = document.getElementsByClassName("stars");
    var rate = document.getElementsByClassName("rate");
    var vote = document.getElementsByClassName("vote");
    var rateNo = document.getElementById("rateNo");
    var voteNo = document.getElementById("voteNo");
    var star1 = document.getElementById("star1");
    var star2 = document.getElementById("star1");
    var star3 = document.getElementById("star1");
    var star4 = document.getElementById("star1");
    var star5 = document.getElementById("star1");
    var isClicked = false;

    window.onload = function() {
    portions.addEventListener("input", changeNoOfIngredients);
    updateRateAndVote();
        for(var i = 0; i < stars.length; i++){
        stars[i].addEventListener("mouseover", mouseOver);
        stars[i].addEventListener("mouseout", mouseOut);
        stars[i].addEventListener("click", mouseClick);
        stars[i].value = i;
    }
};
//kod lånad från http://erijan.github.io/recept.html    
function changeNoOfIngredients(){
    portions = document.getElementById("portions").value;

    if(portions < 1 || portions > 5){
        portions = 1;
        document.getElementById("portions").value = 1;
    }
    for(var i = 0; i < numPortions.length; i++){
        var listString = numPortions[i].textContent;
        var listNumber = parseFloat(listString.match(/[0-9-.]+/)); 
        if(typeof (ingredientsArray[i]) === "undefined"){
            ingredientsArray[i] = listNumber;  
        }
        listNumber = portions * ingredientsArray[i];
        listString = listString.replace(/[0-9-.]+/, listNumber);
        numPortions[i].textContent = listString;
    }
};

function mouseOver(){ 
    if(!isClicked){
        for(var i = 0; i <= this.value; i++){
        stars[i].style.color = "#FDE16D";
        }
    }
}
function mouseOut(){
    if(!isClicked){
        for(var i = 0; i <= this.value; i++){
        stars[i].style.color = "#000000";
        } 
    }
}

function mouseClick(index){
    if(!isClicked){
        isClicked = true;
        for(var i = 0; i <= this.value; i++){
        stars[i].style.color = "#FDE16D";
        }
    }
}
function voting(id){
    switch(id){
        case "star1":
            updateVote(1);
            updateRateAndVote();
            break;
        case "star2":
            updateVote(2);
            updateRateAndVote();
            break;
        case "star3":
            updateVote(3);
            updateRateAndVote();
            break;
        case "star4":
            updateVote(4);
            updateRateAndVote();
            break;
        case "star5":
            updateVote(5);
            updateRateAndVote();
            break;
    }
}

function updateRateAndVote(){
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function (){

	if(this.readyState === 4 && this.status === 200){
            
            var json = JSON.parse(this.responseText);
                rateNo.innerHTML = json.rating.toFixed(1);
                voteNo.innerHTML = json.votes;
        }
    };

xhttp.open("GET",
"https://edu.oscarb.se/sjk15/api/recipe/?api_key=19dd5f4ce90b7ee6&recipe=tortillabr%C3%B6d",
true);

xhttp.send();
}

function updateVote(rates){
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function (){

	if(this.readyState === 4 && this.status === 200){
            
            var json = JSON.parse(this.responseText); 
        }
    };
    updateRateAndVote();
xhttp.open("GET",
"https://edu.oscarb.se/sjk15/api/recipe/?api_key=19dd5f4ce90b7ee6&recipe=tortillabr%C3%B6d&rating=" +rates,
true);

xhttp.send();

}

