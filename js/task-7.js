const inputRangeRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

inputRangeRef.addEventListener('input', onInputFontSize);

function onInputFontSize(event) {
  textRef.style.fontSize = event.currentTarget.value + 'px';
}
