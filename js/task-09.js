function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonChangeColor = document.querySelector('.change-color');
const color = document.querySelector('.color');
const body = document.querySelector('body');

buttonChangeColor.addEventListener('click', onButtonChangeColorClick);

function onButtonChangeColorClick() {
	color.textContent = getRandomHexColor();
	body.style.backgroundColor = color.textContent;
}
