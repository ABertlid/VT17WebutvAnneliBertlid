"use strict";
//API-nyckel: 19dd5f4ce90b7ee6

    var ingredientsArray = new Array();
    var portions = document.getElementById("portions");
    var asideLeft = document.getElementsByTagName("aside")[0];
    var numPortions = asideLeft.getElementsByTagName("li");
    var stars = document.getElementsByClassName("stars");
    var rate = document.getElementsByClassName("rate");
    var vote = document.getElementsByClassName("vote");
    var isClicked = false;

    window.onload = function() {
    portions.addEventListener("input", changeNoOfIngredients);
    voting();
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

function voting(){
    //Har skapar vi själva "AJAX" objektet
    var xhttp = new XMLHttpRequest();
	
    //Denna funktion/property anropas när
    //AJAX Objektet skickar sin request
    xhttp.onreadystatechange = function (){
        //readyState: 4 betyder att sidan är redo att rendera
        //status: 200 betyder att svaret är "okej", dvs. datan
        //skickades korrekt
	if(this.readyState === 4 && this.status === 200){
                    
            //gör om json objektet till ett javascript-objekt
            var json = JSON.parse(this.responseText);
                 console.log("antal röster " +json.votes);
                 console.log("snittbetyg " +json.rating);
        }
    };

	//Här öppnar vi anslutningen mot API:et, där vi hämtar vårt
	//JSON objekt 
xhttp.open("GET",
"https://edu.oscarb.se/sjk15/api/recipe/?api_key=19dd5f4ce90b7ee6&recipe=tortillabr%C3%B6d",
true);

//Här startar vi vår "parallella" händelse
xhttp.send();
}


//visa receptbetyg
//GET https://edu.oscarb.se/sjk15/api/recipe/?api_key=19dd5f4ce90b7ee6&recipe=tortillabr%C3%B6d

// rösta på ett recept
//GET https://edu.oscarb.se/sjk15/api/recipe/?api_key=19dd5f4ce90b7ee6&recipe=tortillabr%C3%B6d&rating=4

function updateRate(){
     
};
function updateVote(){
    
};