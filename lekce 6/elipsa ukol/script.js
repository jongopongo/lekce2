//Z matematiky víme, že známe-li šířku a výšku elipsy, 
//její obsah je polovina šířky krát polovina výšky krát číslo π (tj. přibližně 3,14).
//Založte si prázdnou stránku s JavaScriptovým souborem a napište funkci ellipseArea, 
//která spočítá (vrátí) plochu pozemku dle zadané šířky a výšky. Číslo π najdete v JavaScriptu v proměnné Math.PI.
//Funkci ellipseArea otestujte (např. pomocí document.body.innerHTML += vypište výsledek volání pro různé hodnoty do stránky).

//Pro šířku 1 a výšku 2 by mělo vyjít 1.5707963267948966.
//Pro 2 a 2 pak 3.141592653589793.


// Definice funkce pro výpočet obsahu elipsy
const obsahElipsy = (vyska, sirka) => {
    return (0.5 * sirka) * (0.5 * vyska) * Math.PI;
}

// Testování funkce pro výpočet obsahu elipsy
console.log(obsahElipsy(2, 2));

// Definice funkce pro nalezení většího z dvou čísel
const max2 = (cislo1, cislo2) => {
    if (cislo1 > cislo2) {
        return cislo1;
    } else {
        return cislo2;
    }
}

// Testování funkce pro nalezení většího z dvou čísel
console.log(max2(10, 5)); // Očekávaný výstup: 10
console.log(max2(-2, -8)); // Očekávaný výstup: -2
console.log(max2(7, 7)); // Očekávaný výstup: 7

// Výpočet plochy elipsy pro různé hodnoty šířky a výšky
const area1 = obsahElipsy(1, 2);
const area2 = obsahElipsy(2, 2);

// Vypsání výsledků do stránky
document.body.innerHTML += "Pro šířku 1 a výšku 2 je plocha: " + area1 + "<br>";
document.body.innerHTML += "Pro šířku 2 a výšku 2 je plocha: " + area2 + "<br>";
