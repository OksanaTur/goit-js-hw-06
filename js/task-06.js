// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.

const validInput = document.querySelector('#validation-input');

const totalLength = Number(validInput.getAttribute('data-length'));
// console.log(totalLength)

validInput.addEventListener('blur', checkSymbols => {
  const text = checkSymbols.target.value;

  if (text.length === totalLength) {
    validInput.classList.add('valid');
    validInput.classList.remove('invalid');
  } else {
    validInput.classList.remove('valid');
    validInput.classList.add('invalid');
  }
});