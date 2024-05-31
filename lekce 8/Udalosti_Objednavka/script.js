/*const weakPassword = (len) => {
    let result = '';
    for (let i = 0; i < len; i++) {
      result += String(i % 10);
    }
  
    return result;
  };
  
  const mediumPassword = (len) => {
    let result = '';
    for (let i = 0; i < len; i++) {
      const digit = Math.floor(Math.random() * 10);
      result += String(digit);
    }
  
    return result;
  };
  
  const strongPassword = (len) => {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789_-/?';
    let result = '';
    for (let i = 0; i < len; i++) {
      const charIndex = Math.floor(Math.random() * chars.length);
      result += chars[charIndex];
    }
  
    return result;
  };

*/
/*Přidat eventListener pro kliknutí na button*/
  const button = document.getElementById('button-order');
  button.addEventListener("click", () => {

/*změna textu na buttonu na "objednano"*/
    button.innerHTML = 'Objednano';
  });
  
  // Kontrola dostupnosti - nastaveni casovace zaktivni tlacitko
  setTimeout(() => {
    button.removeAttribute('disabled');
    button.innerHTML = 'Objednano';
}, 4000);

//Přidat EventListener pro kliknutí na button
button.addEventListener("click", () => {
  button.innerText = "Objednáno";
});

