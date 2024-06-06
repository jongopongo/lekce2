/*Napište funkci first, která jako svůj parametr přijme pole a vrátí první prvek tohoto pole. 
Pokud pole bude prázdné, funkce vrátí undefined. Funkci otestujte s několika různými poli.*/
console.log(first([3, 2, 1])); // Výstup: 3
console.log(first([]));         // Výstup: undefined


/*Funkce last:
Tato funkce přijme pole a vrátí poslední prvek tohoto pole. Pokud je pole prázdné, vrátí undefined.*/
console.log(last([3, 2, 1])); // Výstup: 1
console.log(last([]));         // Výstup: undefined

/*Funkce middle:
Tato funkce přijme pole a vrátí prvek uprostřed tohoto pole. Pokud je pole prázdné, vrátí undefined.
Pokud pole obsahuje sudý počet prvků, vrátí funkce prvek vlevo od středu.*/
console.log(middle([3, 2, 1]));    // Výstup: 2
console.log(middle([3, 2, 1, 0])); // Výstup: 2
console.log(middle([]));           // Výstup: undefined

/*Napište funkci middleMean, která jako svůj parametr přijme pole a vrátí prvek uprostřed tohoto pole. Pokud pole bude prázdné,
funkce vrátí undefined. Pokud pole bude obsahovat sudý počet prvků, vrátí funkce průměr dvou prvků uprostřed. Funkci otestujte s několika různými poli. Například:*/
console.log(middleMean([3, 2, 1]));    // Výstup: 2
console.log(middleMean([3, 2, 1, 0])); // Výstup: 1.5
console.log(middleMean([]));           // Výstup: undefined

/*Napište funkci insert, která jako první parametr přijme pole a jako druhý parametr nějakou hodnotu. Funkce zkontroluje, zda pole již obsahuje tuto hodnotu.
 Pokud ano, vrátí false. Pokud ne, vloží hodnotu na konec pole a vrátí true. Funkci otestujte s několika různými poli.*/
 console.log(insert([3, 2, 1], 4)); // Výstup: true
 console.log(insert([3, 2, 1], 3)); // Výstup: false