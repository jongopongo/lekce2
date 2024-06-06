
// Vytvoření prázdného pole pro počty diváků
let audienceCounts = [];

// Přidání počtu diváků na novém představení
audienceCounts.push(100);  // První představení
audienceCounts.push(150);  // Druhé představení
audienceCounts.push(120);  // Třetí představení

// Výpis počtů diváků
console.log("Počty diváků:", audienceCounts);

// Vytvoření pole zaplněnosti divadla
let pocetDivaku = [0.5, 0.8, 0.9, 0.85];

// Odstranění poslední hodnoty
pocetDivaku.pop();

// Výpis zaplněnosti divadla
console.log("Zaplněnost divadla:", pocetDivaku);

// Vytvoření pole názvů divadelních představení
let hry = ["Hamlet", "Romeo a Julie", "Macbeth", "Othello", "Sen noci svatojánské"];

// Uložení druhého názvu představení do proměnné
let druhaHra = hry[1];

// Výpis seznamu názvů představení a druhého názvu
console.log("Názvy představení:", hry);
console.log("Druhé představení:", druhaHra);

let reviews = [
  { casopis: "Divadelní magazín", hodnoceni: 5 },
  { casopis: "Kultura", hodnoceni: 8 },
  { casopis: "Umění a divadlo", hodnoceni: 9 }
];

// Výpis hodnocení
console.log("Hodnocení hry Jeskynní muž:", reviews);
