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

const newList = []

ingredients.forEach(ingredient => {
  let list = document.createElement('li');
  list.textContent = [ingredient];
  list.classList.add('item')
  // console.log(list)
  newList.push(list);
});
listEl.append(...newList)
console.log(listEl)

