const ingredients = [
	'Potatoes',
	'Mushrooms',
	'Garlic',
	'Tomatos',
	'Herbs',
	'Condiments',
];

const ingredientsArray = [];
for (let ingredient of ingredients) {
	const item = document.createElement('li');
	item.textContent = ingredient;
	item.classList.add('item');
	ingredientsArray.push(item);
}

const ingredientsEL = document.querySelector('#ingredients');
ingredientsEL.prepend(...ingredientsArray);
