// this function creates calculator buttons

export default function createDigitButton (calculator, digit) {
  let button = document.createElement('input');
  button.type = 'button';
  button.value = digit;
  button.onclick = function() {
    calculator.answer.value += `${ digit }`;
  };
  button.className = 'number';
  return button;
}
