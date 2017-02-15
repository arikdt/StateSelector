
function run() {

    //use myVars instead?
    var possibleArray = [];

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
        console.log("Im sorry, but we came up with no results that match your specifications.")
    } else {
        console.log(possibleArray);
    }

}