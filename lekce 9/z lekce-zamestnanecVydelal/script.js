/*const clicked = (e) => { 
  e.target.classList.toggle("btn-smiley--selected")
}

document.querySelector("#smiley2").addEventListener("click", clicked)

document.querySelector("#smiley1").addEventListener("click", clicked)

document.querySelector("#smiley3").addEventListener("click", clicked)

document.querySelector("#smiley4").addEventListener("click", clicked)

document.querySelector("#smiley5").addEventListener("click", clicked)
*/
document.querySelector("#reg").addEventListener("submit", (e) => {
  e.preventDefault()
  const firstName = document.querySelector("#firstName").value
  const salary = Number(document.querySelector("#hours").value) * 500

  document.querySelector("#info").textContent = `Na zaklade informaci si zamestanec ${firstName} vydelal ${salary} Kc.`
})