// instantiate the calculator to the DOM
import createDigitButton from './buttons'

export default (function calculator() {
  createElements();
})();

function createElements () {
  // calculator container
  let title = document.createElement('h1');
  let titleText = document.createTextNode('calcJS');
  title.appendChild(titleText);
  document.body.appendChild(title);

  // CALCULATOR BUTTONS

  let calcContainer = document.createElement('div');
  calcContainer.className = 'calcContainer';
  document.body.appendChild(calcContainer);

  let calculator = document.createElement('form');
  calculator.name = 'calculator';
  calcContainer.appendChild(calculator);

  let answer = document.createElement('input');
  answer.type = 'text';
  answer.name = 'answer';
  answer.className = 'answer';
  calculator.appendChild(answer);

  // FIRST ROW
  let firstRow = document.createElement('div');
  firstRow.className = 'firstRow';
  calculator.appendChild(firstRow);

  // 7
  firstRow.appendChild(createDigitButton(calculator, 7));

  // 8
  firstRow.appendChild(createDigitButton(calculator, 8));

  // 9
  firstRow.appendChild(createDigitButton(calculator, 9));

  // +
  let add = document.createElement('input');
  add.type = 'button';
  add.value = '+';
  add.onclick = function() {
    calculator.answer.value += '+';
  };
  firstRow.appendChild(add);
  add.className = 'add operator';

  // SECOND ROW
  let secondRow = document.createElement('div');
  secondRow.className = 'secondRow';
  calculator.appendChild(secondRow);

  //  4
  secondRow.appendChild(createDigitButton(calculator, 4));

  // 5
  secondRow.appendChild(createDigitButton(calculator, 5));

  // 6
  secondRow.appendChild(createDigitButton(calculator, 6));

  // -
  let subtract = document.createElement('input');
  subtract.type = 'button';
  subtract.value = '-';
  subtract.onclick = function() {
    calculator.answer.value += '-';
  };
  secondRow.appendChild(subtract);
  subtract.className = 'subtract operator';


  // THIRD ROW
  let thirdRow = document.createElement('div');
  thirdRow.className = 'thirdRow';
  calculator.appendChild(thirdRow);

  // 1
  thirdRow.appendChild(createDigitButton(calculator, 1));

  // 2
  thirdRow.appendChild(createDigitButton(calculator, 2));

  // 3
  thirdRow.appendChild(createDigitButton(calculator, 3));

  // *
  let multiply = document.createElement('input');
  multiply.type = 'button';
  multiply.value = '*';
  multiply.onclick = function() {
    calculator.answer.value += '*';
  };
  thirdRow.appendChild(multiply);
  multiply.className = 'multiply operator';


  // FOURTH ROW
  let fourthRow = document.createElement('div');
  fourthRow.className = 'fourthRow'
  calculator.appendChild(fourthRow);

  // 0
  fourthRow.appendChild(createDigitButton(calculator, 0));

  // .
  let decimal = document.createElement('input');
  decimal.type = 'button';
  decimal.value = '.';
  decimal.onclick = function() {
    calculator.answer.value += '.';
  };
  fourthRow.appendChild(decimal);
  decimal.className = 'decimal operator';

  // /
  let divide = document.createElement('input');
  divide.type = 'button';
  divide.value = '/';
  divide.onclick = function() {
    calculator.answer.value += '/';
  };
  fourthRow.appendChild(divide);
  divide.className = 'divide operator';


  let fifthRow = document.createElement('div');
  fifthRow.className = 'fifthRow';
  calculator.appendChild(fifthRow);

  // C
  let clear = document.createElement('input');
  clear.type = 'button';
  clear.value = 'C';
  clear.onclick = function() {
    calculator.answer.value = '';
  };
  fifthRow.appendChild(clear);
  clear.className = 'clear';

  // =
  let calculate = document.createElement('input');
  calculate.type = 'button';
  calculate.value = '=';
  calculate.onclick = function() {
    calculator.answer.value = eval(calculator.answer.value);
  };
  fifthRow.appendChild(calculate);
  calculate.className = 'calculate';
}

console.log('calculator app loaded');

