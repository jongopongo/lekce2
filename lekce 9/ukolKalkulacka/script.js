
const keypadElm = document.querySelector('.keypad');
const displayElm = document.querySelector('.display');
console.log(keypadElm);
const handleDigitClick = e => {
	// console.log(e.target.textContent);
	if (displayElm.textContent.length === 9) {
		return;//exit
	}
	if (displayElm.textContent === '0') {
		displayElm.textContent = e.target.textContent;//kdyz display zobrazuje samotnou nulu, nahradime nulu jinym cislem
	} else {
		displayElm.textContent += e.target.textContent;
	}
};
keypadElm.addEventListener('click', handleDigitClick); 