// Pole s jmény oveček
const ovciJmena = [
    'Bětuška',
    'Cína',
    'Dolly',
    'Heidy',
    'Líza',
    'Belinda',
    'Celia',
    'Elvíra',
    'Karla',
    'Otýlie',
    'Škraboška',
    'Kopretinka',
    'Berta',
    'Růženka',
    'Bobinka',
    'Žofka',
    'Dášenka',
    'Vlnka',
    'Květuše',
    'Pampeliška',
  ];
  
  // Funkce pro vypsání příběhu o ovečkách
  function vypisOvecky() {
    const vystup = document.getElementById('vystup'); // Element, kam budeme vypisovat
  
    ovciJmena.forEach((jmeno, index) => {
      const poradi = index + 1; // Pořadí ovečky
      const veta = `Ovečka ${jmeno} jako ${poradi}. přeskočila přes plot.`;
      const paragraf = document.createElement('p'); // Vytvoření nového odstavce
      paragraf.textContent = veta; // Nastavení textu odstavce
      vystup.appendChild(paragraf); // Přidání odstavce do výstupu
    });
  }
  
  // Volání funkce po načtení stránky
  window.addEventListener('load', vypisOvecky);