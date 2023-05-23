// SELETORES
const inputText = document.querySelector("#input-text");
const inputCheckbox = document.querySelector("#input-checkbox");
const hrefLink = document.querySelector("#href");

const prevent = (event) => {
  event.preventDefault();
}; 
hrefLink.addEventListener('click', prevent);
