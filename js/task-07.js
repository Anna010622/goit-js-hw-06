const range = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

range.addEventListener('change', onRangeChange);

function onRangeChange(event) {
	text.style.fontSize = `${event.currentTarget.value}px`;
}
