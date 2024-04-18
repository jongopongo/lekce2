var jmeno1 = "Klara"
let jmeno2 = "Laura"
const jmeno3 = "Jan"

jmeno2 = "Marek"

//poznámka//
/*taky poznámka*/

document.body.innerHTML = jmeno1 + " " + jmeno2 + " " + jmeno3

let hodinovka = 3000
let pocetHodin = 160
let vyplata = hodinovka * pocetHodin

hodinovka = 1000
hodinovka += 100 //hodinovka = hodinovka + 100//
hodinovka *= 100 //hodinovka = hodinovka +100//

vyplata = hodinovka * pocetHodin

document.body.innerHTML += vyplata
document.body.innerHTML += "Tady je dalsi text + ";


let start = 15;
let delka = 10;
let konec = (start + delka) % 24;

//ověření různých délek závodu//
document.body.innerHTML += "<p>Závod skončí v " + konec + ":00 hodin.</p>";


let delkaZkouska1 = 2;
let delkaZkouska2 = 5;
let delkaZkouska3 = 10;

let konecZkouska1 = (start + delkaZkouska1) % 24
let konecZkouska2 = (start + delkaZkouska2) % 24
let konecZkouska3 = (start + delkaZkouska3) % 24

document.body.innerHTML += "<p>Závod skončí v " + konec + ":00 hodin.</p>";

document.body.innerHTML += "<p>Délka závodu " + delkaZkouska1 + " hodin: Závod skončí v " + konecZkouska1 + ":00 hodin.</p>";
document.body.innerHTML += "<p>Délka závodu " + delkaZkouska2 + " hodin: Závod skončí v " + konecZkouska2 + ":00 hodin.</p>";
document.body.innerHTML += "<p>Délka závodu " + delkaZkouska3 + " hodin: Závod skončí v " + konecZkouska3 + ":00 hodin.</p>";