

function run() {

    var possibleArray = [];
    var sw = false;

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

        if (stateArray[i].coast == coast && stateArray[i].politics == pol && stateArray[i].weather == weather && stateArray[i].bigcity == city
            && stateArray[i].diversity == diver) {
            console.log(stateArray[i].name);
        } else {
            sw = true;
        }

        if (sw = true) {
            if (stateArray[i].coast == coast && stateArray[i].weather == weather &&
                stateArray[i].bigcity == city) {
                console.log(stateArray[i].name);
            }
        }

    }
    console.log(possibleArray);

}