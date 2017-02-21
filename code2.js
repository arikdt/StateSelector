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

    console.log("hi");

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

    for (var p = 0; p < stateArray.length; p++) {
// diversity and weather removed
        if (stateArray[p].coast == coast && stateArray[p].politics == pol && stateArray[p].bigcity == city) {
            possibleArray = possibleArray + stateArray[p].name;
        }

    }
}