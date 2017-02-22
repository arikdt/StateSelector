var possibleArray = [];

function run() {

    possibleArray = [];

    var coast = document.getElementById("coast").value;
    if (coast == "false") {
        coast = (coast == "false");
    } else {
        coast = (coast == "true");
    }
    var pol = document.getElementById("politics").value;
    var weather = document.getElementById("weather").value;
    var city = document.getElementById("bigcity").value;
    if (city == "false") {
        city = (city == "false");
    } else {
        city = (city == "true");
    }
    var diver = document.getElementById("diversity").value;

    for (var i = 0; i < stateArray.length; i++) {

    if (stateArray[i].coast == coast && stateArray[i].politics == pol && stateArray[i].weather == weather && stateArray[i].bigcity == city && stateArray[i].diversity == diver) {
            possibleArray = possibleArray + stateArray[i].name;
        }
    }

    if (possibleArray.length == 0) {
        run2();
    } else {
        console.log(possibleArray);
    }
}

function run2() {

    console.log("test test test");

    possibleArray = [];

    var coast = document.getElementById("coast").value;
    if (coast == "false") {
        coast = (coast == "false");
    } else {
        coast = (coast == "true");
    }
    var pol = document.getElementById("politics").value;
    var weather = document.getElementById("weather").value;
    var city = document.getElementById("bigcity").value;
    if (city == "false") {
        city = (city == "false");
    } else {
        city = (city == "true");
    }
    var diver = document.getElementById("diversity").value;

    var c = stateArray[i].coast;
    var p = stateArray[i].politics;
    var w = stateArray[i].weather;
    var b = stateArray[i].bigcity;
    var d = stateArray[i].diversity;

    var which = prompt("Which of the criteria do you care about the least?", "");

    for (var i = 0; i < stateArray.length; i++) {
        if (which == "coast") {
                if (p == pol && w == weather && b == city && d == diver){
                  console.log(stateArray[i].name);
                }
        } else if (which == "politics") {
            if (c == coast && w == weather && b == city && d == diver) {
                console.log(stateArray[i].name);
            }
        } else if (which == "weather") {
            if (c == coast && p == pol && b == city && d == diver) {
                console.log(stateArray[i].name);
            }
        } else if (which == "bigcity") {
            if (c == coast && p == pol && w == weather && d == diver) {
                console.log(stateArray[i].name);
            }
        } else if (which == "diversity") {
            if (c == coast && p == pol && w == weather && b == city) {
                console.log(stateArray[i].name);
            }
        }
        }
    }


