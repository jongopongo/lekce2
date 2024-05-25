// Najdeme element žárovky
const bulb = document.querySelector('.bulb');

// Přidáme event listener na stisknutí klávesy
document.addEventListener('keydown', function(event) {
  // Pokud je žárovka vypnutá, přidáme třídu bulb--on
  if (!bulb.classList.contains('bulb--on')) {
    bulb.classList.add('bulb--on');
  } else {
    // Jinak odebereme třídu bulb--on
    bulb.classList.remove('bulb--on');
  }
});

console.log('funguju!');

