
document.addEventListener("DOMContentLoaded", function() {
    const userEmail = prompt("Zadejte svou e-mailovou adresu:") // získání emailu od uživatele

    const cardNumber = "4125010001000208"; // Číslo platební karty pro ověření
    const msgElement = document.getElementById("msg");


    // Ověření e-mailové adresy
    if (validator.isEmail(userEmail)) {
        document.getElementById("msg").innerText = "E-mail v pořádku.";
    } else {
        document.getElementById("msg").innerText = "Neplatný e-mail";
    }

    // Ověření čísla platební karty
    if (validator.isCreditCard(cardNumber)) {
        msgElement.innerText += " Kreditní karta je platná.";
    } else {
        msgElement.innerText += " Kreditní karta je neplatná.";
    }
});


