//document.getElementById("output").innerHTML = "";
var stateArray = [];

function State(id, name, coast, politics, weather, bigcity, diversity){
    this.id = id;
    this.name = name;
    this.coast = coast;
    this.politics = politics;
    this.weather = weather;
    this.bigcity = bigcity;
    this.diversity = diversity;
    stateArray.push(this);
}

var alabama = new State(1, "alabama", true, "conservative", "hot", true, "medium");

var alaska = new State(2, "alaska", true, "conservative", "cold", false, "medium");

var arizona = new State(3, "arizona", false, "conservative", "hot", true, "low");

var arkansas = new State(4, "arkansas", false, "conservative", "varied", false, "low");

var california = new State(5, "california", true, "liberal", "varied", true, "high");

var colorado = new State(6, "colorado", false, "swing", "varied", true, "low");

var connecticut = new State(7, "connecticut", true, "liberal", "varied", false, "low");

var delaware = new State(8, "delaware", true, "swing", "varied", false, "low");

var florida = new State(9," florida", true, "swing", "hot", true, "high");

var  georgia = new State(10, "georgia", true, "conservative", "hot", true, "high");

var hawaii = new State(11, "hawaii", true, "liberal", "hot", true, "high");

var idaho = new State(12, "idaho", false, "concervative", "varied", false, "low");

var illinois = new State(13, "illinois", false, "liberal", "varied", true, "low");

var indiana = new State(14, "indiana", false, "conservative", "varied", true, "low");

var iowa = new State(15, "iowa", false, "swing", "varied", false, "low");

var kansas = new State(16, "kansas", false, "conservative", "hot", false, "low");

var kentucky = new State(17, "kentucky", false, "conservative", "varied", false, "low");

var louisiana = new State(18, "louisiana", true, "conservative", "hot", true, "high");

var maine = new State(19, "maine", true, "liberal", "cold", false, "low");

var maryland = new State(20, "maryland", true, "liberal", "varied", true, "medium");

var massachusetts = new State(21, "massachusetts", true, "liberal", "varied", true, "low");

var michigan = new State(22, "michigan", false, "swing", "cold", true, "low");

var minnesota = new State(23, "minnesota", false, "liberal", "cold", true, "low");

var mississippi = new State(24, "mississippi", true, "conservative", "hot", false, "high");

var missouri = new State(25, "missouri", false, "conservative", "varied", true, "low");

var montana = new State(26, "montana", false, "conservative", "cold", false, "low");

var nebraska = new State(27, "nebraska", false, "conservative", "varied", false, "low");

var nevada = new State(28, "nevada", false, "swing", "hot", true, "high");

var newHampshire = new State(29, "new hampshire", true, "swing", "cold", false, "low");

var newJersey = new State(30, "new jersey", true, "swing", "varied", false, "high");

var newMexico = new State(31, "new mexico", false, "swing", "hot", true, "high");

var newYork = new State(32, "new york", true, "swing", "varied", true, "high");

var northCarolina = new State(33, "north carolina", true, "conservative", "hot", true, "medium");

var northDakota = new State(34, "north dakota", false, "conservative", "cold", false, "low");

var ohio = new State(35, "ohio", false, "swing", "varied", true, "low");

var oklahoma = new State(36, "oklahoma", false, "conservative", "varied", false, "low");

var oregon = new State(37, "oregon", true, "liberal", "cold", true, "low");

var pennsylvania = new State(38, "pennsylvania", false, "swing", "varied", true, "low");

var rhodeIsland = new State(39, "rhode island", true, "liberal", "varied", false, "medium");

var southCarolina = new State(40, "south carolina", true, "conservative", "hot", false, "high");

var southDakota = new State(41, "south dakota", false, "conservative", "cold", false, "low");

var tennessee = new State(42, "tennessee", false, "conservative", "varied", true, "low");

var texas = new State(43, "texas", true, "conservative", "hot", true, "high");

var utah = new State(44, "utah", false, "conservative", "hot", true, "low");

var vermont = new State(45, "vermont", false, "liberal", "cold", false, "low");

var virginia = new State(46, "virginia", true, "swing", "varied", true, "medium");

var washington = new State(47, "washington", true, "liberal", "cold", true, "low");

var westVirginia = new State(48, "west virginia", false, "conservative", "varied", false, "low");

var wisconsin = new State(49, "wisconsin", false, "swing", "cold", true, "low");

var wyoming = new State(50, "wyoming", false, "conservative", "cold", false, "low");

var washingtonDC = new State(51, "washington D.D.", false, "liberal", "varied", true, "high");

var puertoRico = new State(52, "puerto rico", true, "apolitical", "hot", false, "high");

var guam = new State(53, "guam", true, "apolitical", "hot", false, "high");

console.log(stateArray);

