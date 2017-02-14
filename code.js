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

var alabama = new State(0, "alabama", true, "conservative", "hot", true, "medium");

var alaska = new State(1, "alaska", true, "conservative", "cold", false, "medium");

var arizona = new State(2, "arizona", false, "conservative", "hot", true, "low");

var arkansas = new State(3, "arkansas", false, "conservative", "varied", false, "low");

var california = new State(4, "california", true, "liberal", "varied", true, "high");

var colorado = new State(5, "colorado", false, "swing", "varied", true, "low");

var connecticut = new State(6, "connecticut", true, "liberal", "varied", false, "low");

var delaware = new State(7, "delaware", true, "swing", "varied", false, "low");

var florida = new State(8," florida", true, "swing", "hot", true, "high");

var  georgia = new State(9, "georgia", true, "conservative", "hot", true, "high");

var hawaii = new State(10, "hawaii", true, "liberal", "hot", true, "high");

var idaho = new State(11, "idaho", false, "concervative", "varied", false, "low");

var illinois = new State(12, "illinois", false, "liberal", "varied", true, "low");

var indiana = new State(13, "indiana", false, "conservative", "varied", true, "low");

var iowa = new State(14, "iowa", false, "swing", "varied", false, "low");

var kansas = new State(15, "kansas", false, "conservative", "hot", false, "low");

var kentucky = new State(16, "kentucky", false, "conservative", "varied", false, "low");

var louisiana = new State(17, "louisiana", true, "conservative", "hot", true, "high");

var maine = new State(18, "maine", true, "liberal", "cold", false, "low");

var maryland = new State(19, "maryland", true, "liberal", "varied", true, "medium");

var massachusetts = new State(20, "massachusetts", true, "liberal", "varied", true, "low");

var michigan = new State(21, "michigan", false, "swing", "cold", true, "low");

var minnesota = new State(22, "minnesota", false, "liberal", "cold", true, "low");

var mississippi = new State(23, "mississippi", true, "conservative", "hot", false, "high");

var missouri = new State(24, "missouri", false, "conservative", "varied", true, "low");

var montana = new State(25, "montana", false, "conservative", "cold", false, "low");

var nebraska = new State(26, "nebraska", false, "conservative", "varied", false, "low");

var nevada = new State(27, "nevada", false, "swing", "hot", true, "high");

var newHampshire = new State(28, "new hampshire", true, "swing", "cold", false, "low");

var newJersey = new State(29, "new jersey", true, "swing", "varied", false, "high");

var newMexico = new State(30, "new mexico", false, "swing", "hot", true, "high");

var newYork = new State(31, "new york", true, "swing", "varied", true, "high");

var northCarolina = new State(32, "north carolina", true, "conservative", "hot", true, "medium");

var northDakota = new State(33, "north dakota", false, "conservative", "cold", false, "low");

var ohio = new State(34, "ohio", false, "swing", "varied", true, "low");

var oklahoma = new State(35, "oklahoma", false, "conservative", "varied", false, "low");

var oregon = new State(36, "oregon", true, "liberal", "cold", true, "low");

var pennsylvania = new State(37, "pennsylvania", false, "swing", "varied", true, "low");

var rhodeIsland = new State(38, "rhode island", true, "liberal", "varied", false, "medium");

var southCarolina = new State(39, "south carolina", true, "conservative", "hot", false, "high");

var southDakota = new State(40, "south dakota", false, "conservative", "cold", false, "low");

var tennessee = new State(41, "tennessee", false, "conservative", "varied", true, "low");

var texas = new State(42, "texas", true, "conservative", "hot", true, "high");

var utah = new State(43, "utah", false, "conservative", "hot", true, "low");

var vermont = new State(44, "vermont", false, "liberal", "cold", false, "low");

var virginia = new State(45, "virginia", true, "swing", "varied", true, "medium");

var washington = new State(46, "washington", true, "liberal", "cold", true, "low");

var westVirginia = new State(47, "west virginia", false, "conservative", "varied", false, "low");

var wisconsin = new State(48, "wisconsin", false, "swing", "cold", true, "low");

var wyoming = new State(49, "wyoming", false, "conservative", "cold", false, "low");

var washingtonDC = new State(50, "washington D.D.", false, "liberal", "varied", true, "high");

var puertoRico = new State(51, "puerto rico", true, "apolitical", "hot", false, "high");

var guam = new State(52, "guam", true, "apolitical", "hot", false, "high");

console.log(stateArray);

