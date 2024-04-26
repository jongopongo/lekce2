const jmeno = prompt ("zadej jmeno")


document.body.innerHTML += "<p>" + jmeno.length + "<p>"; //delka znaku
document.body.innerHTML += "<p>" + jmeno.toUpperCase() + "</p>"; 
document.body.innerHTML += "<p>" + jmeno.toLowerCase() + "</p>";
document.body.innerHTML += "<p>" + jmeno.trim() + "</p>";
document.body.innerHTML += "<p>" + jmeno.trimEnd() + "</p>";
document.body.innerHTML += "<p>" + jmeno.trimStart() + "</p>";
document.body.innerHTML += "<p>" + jmeno.slice(3, 7) + "</p>"; //napíšu jméno Michal - zobrazí se mi hal protože jedeme od 0, M=0, I=1,C=2,H=3
document.body.innerHTML += "<p>" + jmeno.indexOf("al") + "</p>";//v rámci Michala mi to vyhodí číselnou hodnotu
document.body.innerHTML += "<p>" + jmeno.padStart(13, "+420") + "</p>";
document.body.innerHTML += "<p>" + jmeno.padEnd(9, "L") + "</p>"; // co mam v "" tak to budu mit na konci za jmenem Michal 

//Interpolace řetězců - Templates string

document.body.innerHTML +=

// ``  {{}} //klávesová zkratka pro apostrof na eng klávesnici nad tabulátorem vlevo


document.body.innerHTML += `
    <p>${hodnota.padStart(13, "+420")}</p>
    <p>${hodnota.padEnd(9, "0")}</p>
`

//Úkol
let title = "Popelka"

document.body.innerHTML += "<p>Počet znaků:" + title.length + "<p>";
document.body.innerHTML += "<p>Velká písmena:"+ title.toUpperCase() + "</p>"; 
document.body.innerHTML += `<p>Prvních pět znaků:<p> ${title.slice(0,"5")} </p>`;
document.body.innerHTML += `<p>Prvních pět znaků: ${title.slice(-5)} </p>`;

//Úkol Email

let email = prompt("vložte Váš email:");
let atIndex = email.indexOf ("@");
let userName = email.slice (0, atIndex);
let domainName = email.slice(atIndex +1);

const parsedEmail = {
    userName: userName,
    domain: domainName
};

document.body.innerHTML += `
  <p>Uživatelské jméno: ${parsedEmail.userName}</p>
  <p>Doména: ${parsedEmail.domain}</p>
`;


//úkol Doručování
let ulice = prompt("Zadejte svou ulici:");
let cisloDomu = prompt("Zadejte číslo domu:");
let mesto = prompt("Zadejte město:");
let psc = prompt("Zadejte PSČ:");

//sestavení HTML řetězce přes interpolaci řetězců
let adresaHtml = `
    <address>
    <p>${ulice} ${cisloDomu}</p>
    <p>${psc} ${mesto}</p>
  </address>
  `;
document.body.innerHTML = adresaHtml;

// hodnota dat.ty pouzivame vzdy 3x=
if(vek === "18") {
    console.log(true)
} else {
    console.log(false)
}


if(vyslednaZnamka === 1) {
    console.log("Vyborny")
} else if(vyslednaZnamka === 2) {
    console.log("Chvalitebny")
} else if(vyslednaZnamka === 3) {
    console.log("Dobry")
} else if(vyslednaZnamka === 4) {
    console.log("Dostatecny")
} else if(vyslednaZnamka === 5) {
    console.log("Nedostatecny")
} else {
    console.log("ERROR: Spatna hodnota")
}

let dospelost = null

if (vek >=18) {
    dospelost = "dospely"
} else {
 dospelost = "mladenec"
}

console.log(dospelost)

//Uložení hodnot do proměnných

let name = prompt("Zadejte své jméno");
let age =  parseFloat(prompt("Zadejte svůj věk:"));
let password = prompt("Zadejte heslo:");


//Kontrola věku vypsání do konzole

if (age >= 65) {
    console.log("Věk uživatele je v pořádku.");
} else {
    console.log("věk uživatele je příliš nízký.");
  }

//Kontrola hesla (slabé/silné)
if (password.lenght <8){
      console.log("slabé heslo.");¨
    } else {
        console.log("Silné heslo.")
    }

//Vstupenky
//zadání věku uživatele
let age = parseInt(prompt("Zadejte svůj věk"));

//Základní cena vstupenky
let plnaCena = 12;
//Výpočet ceny vstupenky podle věku
let cena;
if (age< 6) {
    cena = 0;
} else if (age>=6  && age <=26) {
    cena = Math.round (0.65* zakladniCena);
    else if (age >=27 &&  age <= 64)
    cena = plnaCena;
} else {
    cena = Math.round(0,5* zakladniCena);
}

//Výstup ceny vstupenky
console.log("Vaše cena vstupenky je "+ cena + "eur. Děkujeme za rezervaci!";)