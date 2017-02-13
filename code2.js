

function run() {

    var coast = document.getElementById("coast").value;
    var pol = document.getElementById("politics").value;
    var weather = document.getElementById("weather").value;
    var city = document.getElementById("bigcity").value;
    var diver = document.getElementById("diversity").value;


    for(var i = 0; i < stateArray.length; i++) {

        if (stateArray[i].coast) {
            console.log(stateArray[i].name);
        }

    }

}