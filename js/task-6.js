const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onInputBlur);

function onInputBlur() {
  if (
    inputRef.value.length > Number(inputRef.dataset.length) ||
    inputRef.value.length < Number(inputRef.dataset.length)
  ) {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
  } else if (inputRef.value.length === Number(inputRef.dataset.length)) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  }
}
