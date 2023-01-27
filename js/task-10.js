function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');
const inputAmount = document.querySelector('#controls > input');

buttonCreate.addEventListener('click', onButtonCreateClick);
buttonDestroy.addEventListener('click', onButtonDestroyClick);
inputAmount.addEventListener('input', onInputAmountChange);

let amount;
function onInputAmountChange(event) {
	amount = Number(event.currentTarget.value);
	return amount;
}

function onButtonCreateClick() {
	let box = [];
	let width = 30;
	let height = 30;
	if (amount > 0) {
		for (let i = 1; i <= amount; i += 1) {
			box.push(
				`<div style="background-color: ${getRandomHexColor()}; width: ${width}px; height: ${height}px; "></div>`
			);
			width += 10;
			height += 10;
		}
	} else {
		alert('Введіть число більше нулю!');
	}

	boxes.insertAdjacentHTML('beforeend', box.join(' '));
}

function onButtonDestroyClick() {
	boxes.innerHTML = '';
}
