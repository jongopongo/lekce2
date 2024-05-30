document.querySelector("#reg").addEventListener("submit", (e) => {
  e.preventDefault()
  const firstName = document.querySelector("#firstName").value
  let salary = Number(document.querySelector("#hours").value) * 500
  const partnership = document.querySelector("#partnership").value

  if(partnership == "os") {
      salary = Number(document.querySelector("#hours").value) * 700
  }

  document.querySelector("#info").textContent = `Na zaklade informaci si zamestanec ${firstName} vydelal ${salary} Kc.`
})

document.querySelector("#password").addEventListener("change", (e) => {
  if(Number(e.target.value.length) < 16) {
      console.log(`Nedostatecna delka hesla. Tve heslo ma ${e.target.value.length} znaku, musis jeste zadat ${16 - Number(e.target.value.length)} znaku`)
  } else {
      console.log("Heslo je dostatecne dlouhe")
  }
})