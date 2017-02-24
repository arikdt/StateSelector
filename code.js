//document.getElementById("output").innerHTML = "";
var stateArray = [];

function State(id, name, coast, politics, weather, bigcity, diversity, nice){
    this.id = id;
    this.name = name;
    this.coast = coast;
    this.politics = politics;
    this.weather = weather;
    this.bigcity = bigcity;
    this.diversity = diversity;
    this.nice = nice;
    stateArray.push(this);
}

var alabama = new State(0, "alabama", true, "conservative", "hot", true, "medium", false);

var alaska = new State(1, "alaska", true, "conservative", "cold", false, "medium", false);

var arizona = new State(2, "arizona", false, "conservative", "hot", true, "low", false);

var arkansas = new State(3, "arkansas", false, "conservative", "varied", false, "low", false);

var california = new State(4, "california", true, "liberal", "varied", true, "high", true);

var colorado = new State(5, "colorado", false, "swing", "varied", true, "low", true);

var connecticut = new State(6, "connecticut", true, "liberal", "varied", false, "low", false);

var delaware = new State(7, "delaware", true, "swing", "varied", false, "low", false);

var florida = new State(8," florida", true, "swing", "hot", true, "high", true);

var  georgia = new State(9, "georgia", true, "conservative", "hot", true, "high", false);

var hawaii = new State(10, "hawaii", true, "liberal", "hot", true, "high", true);

var idaho = new State(11, "idaho", false, "concervative", "varied", false, "low", false);

var illinois = new State(12, "illinois", false, "liberal", "varied", true, "low", false);

var indiana = new State(13, "indiana", false, "conservative", "varied", true, "low", false);

var iowa = new State(14, "iowa", false, "swing", "varied", false, "low", false);

var kansas = new State(15, "kansas", false, "conservative", "hot", false, "low", false);

var kentucky = new State(16, "kentucky", false, "conservative", "varied", false, "low", false);

var louisiana = new State(17, "louisiana", true, "conservative", "hot", true, "high", false);

var maine = new State(18, "maine", true, "liberal", "cold", false, "low", true);

var maryland = new State(19, "maryland", true, "liberal", "varied", true, "medium", false);

var massachusetts = new State(20, "massachusetts", true, "liberal", "varied", true, "low", false);

var michigan = new State(21, "michigan", false, "swing", "cold", true, "low", false);

var minnesota = new State(22, "minnesota", false, "liberal", "cold", true, "low", false);

var mississippi = new State(23, "mississippi", true, "conservative", "hot", false, "high", false);

var missouri = new State(24, "missouri", false, "conservative", "varied", true, "low", false);

var montana = new State(25, "montana", false, "conservative", "cold", false, "low", false);

var nebraska = new State(26, "nebraska", false, "conservative", "varied", false, "low", false);

var nevada = new State(27, "nevada", false, "swing", "hot", true, "high", false);

var newHampshire = new State(28, "new hampshire", true, "swing", "cold", false, "low", false);

var newJersey = new State(29, "new jersey", true, "swing", "varied", false, "high", false);

var newMexico = new State(30, "new mexico", false, "swing", "hot", true, "high", true);

var newYork = new State(31, "new york", true, "swing", "varied", true, "high", true);

var northCarolina = new State(32, "north carolina", true, "conservative", "hot", true, "medium", true);

var northDakota = new State(33, "north dakota", false, "conservative", "cold", false, "low", false);

var ohio = new State(34, "ohio", false, "swing", "varied", true, "low", false);

var oklahoma = new State(35, "oklahoma", false, "conservative", "varied", false, "low", false);

var oregon = new State(36, "oregon", true, "liberal", "cold", true, "low", false);

var pennsylvania = new State(37, "pennsylvania", false, "swing", "varied", true, "low", false);

var rhodeIsland = new State(38, "rhode island", true, "liberal", "varied", false, "medium", false);

var southCarolina = new State(39, "south carolina", true, "conservative", "hot", false, "high", false);

var southDakota = new State(40, "south dakota", false, "conservative", "cold", false, "low", false);

var tennessee = new State(41, "tennessee", false, "conservative", "varied", true, "low", false);

var texas = new State(42, "texas", true, "conservative", "hot", true, "high", true);

var utah = new State(43, "utah", false, "conservative", "hot", true, "low", true);

var vermont = new State(44, "vermont", false, "liberal", "cold", false, "low", false);

var virginia = new State(45, "virginia", true, "swing", "varied", true, "medium", true);

var washington = new State(46, "washington", true, "liberal", "cold", true, "low", false);

var westVirginia = new State(47, "west virginia", false, "conservative", "varied", false, "low", false);

var wisconsin = new State(48, "wisconsin", false, "swing", "cold", true, "low", false);

var wyoming = new State(49, "wyoming", false, "conservative", "cold", false, "low", false);

var washingtonDC = new State(50, "washington D.D.", false, "liberal", "varied", true, "high", false);

var puertoRico = new State(51, "puerto rico", true, "conservative", "hot", false, "high", true);

var guam = new State(52, "guam", true, "liberal", "liberal", false, "high", true);

console.log(stateArray);

