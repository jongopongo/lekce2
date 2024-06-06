const cisla = [7, 1, 4, 5, 2, 9, 3, 6, 8];
const zvirata = [
    'pes',
    'kočka',
    'králík',
    'had',
    'andulka',
    'morče',
    'krkavec',
];
const napoje = [
    { nazev: 'Pivo', cena: 12, skladem: true },
    { nazev: 'Rum', cena: 120, skladem: false },
    { nazev: 'Víno', cena: 85, skladem: true },
    { nazev: 'Whisky', cena: 450, skladem: true },
    { nazev: 'Vodka', cena: 280, skladem: false },
    { nazev: 'Becherovka', cena: 210, skladem: true },
    { nazev: 'Kofola', cena: 40, skladem: true },
    { nazev: 'Voda', cena: 15, skladem: false },
];

// Create a div element to display the results
const vysledky = document.getElementById('vysledky');

// Pole obsahujici vsechna cisla z pole cisla vynasobena dvema
const cislaDoubled = cisla.map((cislo) => cislo * 2);
console.log('Čísla vynásobená dvěma:', cislaDoubled);

// Delka vsech retezcu z pole 'zvirata'
const delkyZvirat = zvirata.map((zvire) => zvire.length);
console.log('Délky řetězců zvířat:', delkyZvirat);

// Pole obsahujici pouze nazvy vsech 'napoje'
const nazvyNapoje = napoje.map((napoj) => napoj.nazev);
console.log('Názvy nápojů:', nazvyNapoje);

// Pouze nazev napoje z pole napoje,kdyz je skladem, kdyz neni,tak neni skladem
const nazvySkladem = napoje.map((napoj) => (napoj.skladem ? napoj.nazev : 'Není skladem'));
console.log('Názvy nápojů se stavem skladu:', nazvySkladem);
