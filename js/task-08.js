const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
	event.preventDefault();

	// const formData = new FormData(event.currentTarget);

	// formData.forEach(value => {
	// 	if (value === '') {
	// 		alert('Всі поля повинні бути заповнені!');
	// 	}
	// });

	const email = event.currentTarget.elements.email.value;
	const password = event.currentTarget.elements.password.value;

	if (email === '' || password === '') {
		alert('Всі поля повинні бути заповнені!');
	} else {
		const formObg = {
			email,
			password,
		};
		console.log(formObg);
		form.reset();
	}
}
