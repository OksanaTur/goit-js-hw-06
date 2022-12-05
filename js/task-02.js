const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// // Напиши скрипт, який для кожного елемента масиву ingredients:

// // Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// // Додасть назву інгредієнта як його текстовий вміст.
// // Додасть елементу клас item.
// // Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const listEl = document.querySelector('#ingredients');

const listFood = ingredients.forEach(ingredient => {
  let list = document.createElement('li');
  list.textContent = [ingredient];
  list.classList.add('item')
  // console.log(list)
  listEl.append(list);
});

console.log(listEl)

