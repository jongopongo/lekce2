document.querySelector("#myForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Zastavím odeslání formuláře

  const form = document.querySelector("#myForm");
  form.innerHTML = "<p>Objednávka odeslána ke zpracování.</p>";


 // Získání hodnot z formuláře
 const platebniKartaValue = document.querySelector("#platebniKarta").value;
 const dopravaValue = document.querySelector("#doprava").value;


  // Vypsání hodnot do konzole
  console.log("Platební karta:", platebniKartaValue);
  console.log("Doprava:", dopravaValue);
});

