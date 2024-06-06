const kniha = {
    nazev: "Superkniha",
    cena: 1050, 
    skladem: true
}

const jmena = ["Michal", "Jakub", "Jana", "Martina", "Sara"]
//                0         1        2        3         4

console.log(jmena[2])
console.log(jmena[4])

const tridy = [
    ["Michal", "Jana", "Marek"], // 0
    ["Martina", "Lucka", "Kamil"] // 1
    //   0         1        2
]

console.log(tridy[1][1])

const tridy2 = [
    {
        nazev: "1.A.",
        zaci: [
            "Milan",
            "Katerina",
            "Karel"
        ]
    },
    {
        nazev: "2.B.",
        zaci: [
            "Karolina",
            "Josef",
            "Dalibor"
        ]
    }
]

console.log(tridy2[1].zaci[1])
