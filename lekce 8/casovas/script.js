let sekundy = 20

setInterval(() => {
    document.body.innerHTML = `<p>${sekundy}</p>`
    sekundy--
}, 1000)