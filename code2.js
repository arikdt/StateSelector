var possibleArray = [];

function run() {

    possibleArray = [];

    if (document.getElementById("island").value == true) {
        islandPlace();
    }

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

        var c = stateArray[i].coast;
        var p = stateArray[i].politics;
        var w = stateArray[i].weather;
        var b = stateArray[i].bigcity;
        var d = stateArray[i].diversity;

    if (c == coast && p == pol && w == weather && b == city && d == diver) {
        possibleArray.push(stateArray[i].name);
        }
    }

    if (possibleArray.length == 0) {
        run2();
    } else {
        if (possibleArray.length != 1) {
            console.log(possibleArray[0]);
        } else {
            console.log(possibleArray);
        }
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

    var which = prompt("Which of the criteria do you care about the least? Weather, politics, bigcity, weather, diversity", "");

    for (var i = 0; i < stateArray.length; i++) {

        var c = stateArray[i].coast;
        var p = stateArray[i].politics;
        var w = stateArray[i].weather;
        var b = stateArray[i].bigcity;
        var d = stateArray[i].diversity;

        if (which == "coast") {
            if (p == pol && w == weather && b == city && d == diver){
                possibleArray.push(stateArray[i].name);
                }
        } else if (which == "politics") {
            if (c == coast && w == weather && b == city && d == diver) {
                possibleArray.push(stateArray[i].name);
            }
        } else if (which == "weather") {
            if (c == coast && p == pol && b == city && d == diver) {
                possibleArray.push(stateArray[i].name);
            }
        } else if (which == "bigcity") {
            if (c == coast && p == pol && w == weather && d == diver) {
                possibleArray.push(stateArray[i].name);
            }
        } else if (which == "diversity") {
            if (c == coast && p == pol && w == weather && b == city) {
                possibleArray.push(stateArray[i].name);
            }
        }
        }
        if (possibleArray.length >= 1) {
            console.log(possibleArray[0]);
        } else if (possibleArray.length == 0) {
            console.log("No state currently matches your criteria, however, Hawaii is lovely this time of year, how about trying that? The lack of stress would probably be good for your heart. Don't believe me? Ask your doctor. Don't care about your health?. Fine. But its nice there anyway so you should still go.");
        } else {
            console.log(possibleArray);
        }
    }


