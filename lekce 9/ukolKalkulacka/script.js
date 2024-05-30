/*const keypadElm = document.querySelector('.keypad');
console.log(keypadElm);
const handleDigitClick = e => {
  console.log(e.target);
*/

/*keypadElm.addEventListener('click',handleDigitClick);*/
const keypadElm = document.querySelector('.keypad');
console.log(keypadElm);

/*keypadElm.addEventListener('click')*/
function handleDigitClick(event) {
  const clickedButton = event.target;
  const digit = clickedButton.textContent;

  // Zde vložte cifru na displej (přidejte ji doprava k aktuálnímu obsahu)

  // Omezení délky čísla na displeji (max. devět číslic)
  // ...

  event.preventDefault();
}

// Připojení posluchače na tlačítka s čísly
const digitButtons = document.querySelectorAll('.digit-button');
digitButtons.forEach(button => {
  button.addEventListener('click', handleDigitClick);
});

// Získání odkazu na element s displejem
const display = document.getElementById('info');
let currentNumber = ''; // Aktuální číslo

// Funkce pro zpracování kliknutí na tlačítka s čísly
function handleDigitClick(event) {
  const clickedButton = event.target;
  const digit = clickedButton.textContent;

  // Přidání kliknuté cifry k aktuálnímu číslu
  currentNumber += digit;

  // Omezení délky čísla na displeji (max. devět číslic)
  if (currentNumber.length > 9) {
    currentNumber = currentNumber.slice(0, 9);
  }

  // Zobrazení aktuálního čísla na displeji
  display.textContent = currentNumber;
}

// Připojení posluchače na všechna tlačítka s ciframi
const digitButtons = document.querySelectorAll('.digit-button');
digitButtons.forEach(button => {
  button.addEventListener('click', handleDigitClick);
});