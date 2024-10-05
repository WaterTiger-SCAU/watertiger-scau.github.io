function typeWriter(e) {
	e.textContent += text[lineIndex][charIndex++];

	if (charIndex < text[lineIndex].length) {
		setTimeout(typeWriter, printDelay, e);
	} else {
		setTimeout(typeErase, printDelay * 10, e);
	}
}

function typeErase(e) {
	var str = e.textContent;
	e.textContent = str.substring(0, str.length - 1);

	if (str.length > 0) {
		setTimeout(typeErase, eraseDelay, e);
	} else {
		charIndex = 0;
		nextLine();
		setTimeout(typeWriter, eraseDelay * 10, e);
	}
}

function nextLine() {
	lineIndex++;
	if (lineIndex == text.length) {
		lineIndex = 0;
	}
}

const text = [
	"welcome to my personal website",
	"I will share some knowledge and insights here",
	"There are some surprises hidden in this website, waiting for you to discover ᕕ( ᐛ )ᕗ"
];
const printDelay = 75;
const eraseDelay = 30;

let charIndex = 0;
let lineIndex = 0;