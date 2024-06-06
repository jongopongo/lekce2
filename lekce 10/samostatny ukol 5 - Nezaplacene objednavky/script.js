const nezaplaceneObjednavky = [
    // ... (zde zůstává původní pole nezaplacených objednávek)
  ];
  
  // Vytvoření pole identifikátorů (ID objednávek)
  const identifikatory = nezaplaceneObjednavky.map((objednavka) => objednavka.id);
  
  // Vytvoření pole emailů
  const emaily = nezaplaceneObjednavky.map((objednavka) => objednavka.uzivatel.email);
  
  // Funkce pro zpracování emailů
  const processEmails = (emails) => {
    document.querySelector('#emaily').textContent = emails.join(', ');
  };
  
  // Funkce pro zpracování identifikátorů
  const processIdentifiers = (identifiers) => {
    document.querySelector('#identifikatory').textContent = identifiers.join(', ');
  };
  
  // Volání funkcí pro zpracování
  processIdentifiers(identifikatory);
  processEmails(emaily);
  