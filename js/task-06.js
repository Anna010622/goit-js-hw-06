const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
	if (
		Number(input.getAttribute('data-length')) ===
		event.currentTarget.value.length
	) {
		input.classList.add('valid');
		input.classList.remove('invalid');
	} else {
		input.classList.add('invalid');
		input.classList.remove('valid');
	}
}
