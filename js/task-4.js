const valueRef = document.querySelector('#value');
const btnIncrementRef = document.querySelector(
  '#counter button[data-action="increment"]',
);
const btnDecrementRef = document.querySelector(
  '#counter button[data-action="decrement"]',
);
let counterValue = 0;

btnIncrementRef.addEventListener('click', onIncrementClick);
btnDecrementRef.addEventListener('click', onDecrementClick);

function onIncrementClick(event) {
  counterValue += 1;
  valueRef.textContent = counterValue;
}

function onDecrementClick(event) {
  counterValue -= 1;
  valueRef.textContent = counterValue;
}
