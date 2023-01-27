// const btnDecrement = document.querySelector('[data-action="decrement"]');
// const btnIncrement = document.querySelector('[data-action="increment"]');
// const counterValue = document.querySelector('#value');

// counterValue.textContent = 0;

// btnDecrement.addEventListener('click', onBtnDecrementClick);
// btnIncrement.addEventListener('click', onBtnIncrementClick);

// function onBtnDecrementClick() {
// 	counterValue.textContent = Number(counterValue.textContent) - 1;
// }
// function onBtnIncrementClick() {
// 	counterValue.textContent = Number(counterValue.textContent) + 1;
// }

const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');

let counterValue = 0;

btnDecrement.addEventListener('click', onBtnDecrementClick);
btnIncrement.addEventListener('click', onBtnIncrementClick);

function onBtnDecrementClick() {
	counterValue -= 1;
	value.textContent = counterValue;
}
function onBtnIncrementClick() {
	counterValue += 1;
	value.textContent = counterValue;
}
