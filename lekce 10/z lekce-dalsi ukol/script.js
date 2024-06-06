const selectSmiley = (event) => {
    event.target.classlist.add ("ramecek")

};

const buttons = document.querySelectorAll (".btn-smiley")
console.log(buttons)

document.querySelectorAll(".btn-smiley").forEach((element) => {
    element.addEventListener("click", (event) => {
        event.target.classList.add("ramecek");
    })
})

const selectSmiley = (event) => {
    event.target.classList.add("ramecek");
};
  
const buttons = document.querySelectorAll(".btn-smiley")
console.log(buttons)


/*nahrazení a zkrácení verze*/
document.querySelectorAll(".btn-smiley").forEach((element) => {
    element.addEventListener("click", selectSmiley)
})

/*tady je potreba objasnit kod neni mi to uplne jasne

/*Vytvoření funkce selectSmiley:
Nejprve je definována funkce selectSmiley, která má jeden parametr event.
Tato funkce přidá třídu "ramecek" k cílovému elementu (tj. elementu, na kterém byla vyvolána událost).
Používá se metoda event.target.classList.add("ramecek").
Výběr všech tlačítek s třídou .btn-smiley:
Na začátku kódu jsou vybrána všechna tlačítka s třídou .btn-smiley a uložena do proměnné buttons.
To se děje pomocí metody document.querySelectorAll(".btn-smiley").
Přidání události “click” k tlačítkům:
Poté jsou všechna tlačítka procházena pomocí metody forEach.
Každému tlačítku je přidána událost “click”, která vyvolá funkci selectSmiley.
Zkrácená verze:
Kód může být zkrácen tak, že místo opakovaného výběru tlačítek a přidávání události se použije jedna řádka kódu.
Tímto způsobem jsou všechna tlačítka automaticky propojena s funkcí selectSmiley.
Celkově jde o kód, který přidá třídu "ramecek" k tlačítkům s třídou .btn-smiley, když na ně uživatel klikne.
Tím lze například změnit jejich vizuální vzhled.*/
