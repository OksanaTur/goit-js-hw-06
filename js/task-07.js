// Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input)
//  і змінює інлайн - стиль span#text, оновлюючи властивість font - size.
//  В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const textEl = document.querySelector('#text');

const inputEl = document.querySelector('#font-size-control');

inputEl.addEventListener("input", changedFontSize);

function changedFontSize(evt) {

    const size = inputEl.value;
    // console.log(size);

    textEl.style.fontSize = size + "px";
}
