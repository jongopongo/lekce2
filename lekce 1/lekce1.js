document.body.innerHTML = "<h1>Hello world!</h1>";
document.body.innerHTML += "<h2>Muj prvni web</h2>";
document.body.innerHTML += 16 % 2;
document.body.innerHTML += "<p>Jmenuji se Magdalena Rettigova. Jak se máš?</p>";
document.body.innerHTML += "<p>Zaokrouhlené číslo: " + Math.round(4.2) + "</p>";
document.body.innerHTML += "<p>Náhodné číslo: " + Math.round(Math.random() * 10) + "</p>";
document.body.innerHTML += 265 * 7 * 21;

//let plus = plus + 7;

//let plus += 7;

let mzdaNaHodinu = 265; // mzda za hodinu v Kč
let hodinDenně = 7; // pracovní doba v hodinách denně
let pracovnichDniVMesici = 21; // počet pracovních dní v měsíci

// Výpočet měsíčního příjmu
let mesicniPrijem = 265 * 7 * 21;

// Výpis výsledku
console.log("Měsíční příjem: " + mesicniPrijem + " Kč");

//proměnné
const name = prompt("Zadejte své jméno:");
