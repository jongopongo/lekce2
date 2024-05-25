const elInfo = document.querySelector("#info")
const elBtn = document.querySelector("#btn")

let counter = 0

elBtn.addEventListener("click", () => {
    counter++

    if(counter < 10) {
        elInfo.textContent = `Kdy bude na counteru 10, tak vyhrajes neco super: ${counter} kliknuti`
    } else if(counter < 20) {
        elInfo.textContent = `Hahah nechal ses nachytat, musis kliknout alespon 20x: ${counter} kliknuti`
    } else if(counter < 1000) {
        elInfo.textContent = `Porad to nevzdavas.... uklikej se ....: ${counter} kliknuti`
    }
})

elInfo.addEventListener("mouseover", () => {
    elInfo.style.color = "gold"
    elInfo.classList.toggle("zlata")
})