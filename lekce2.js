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
document.body.innerHTML += "Tady je dalsi text"
