const inputRef = document.querySelector('input#name-input');
const outputRef = document.querySelector('span#name-output');

inputRef.addEventListener('input', onNameOutput);

function onNameOutput(event) {
  if (event.currentTarget.value !== '') {
    outputRef.textContent = event.currentTarget.value;
  } else {
    outputRef.textContent = 'незнакомец';
  }
}
