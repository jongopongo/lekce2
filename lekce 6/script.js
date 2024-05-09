
const email = "test@test.cz"
const elInfo = document.querySelector("#info")
const now = dayjs()

console.log(validator.isEmail(email))
console.log(now.format("DD.MM.YY"))

if(validator.isEmail(email)) {
    elInfo.style.backgroundColor = "green"
    elInfo.textContent = "Spravne zadany e-mail"
} else { 
    elInfo.style.backgroundColor = "red"
    elInfo.textContent = "Spatne zadany e-mail"
}

