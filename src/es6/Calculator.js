// instantiate the calculator to the DOM
import createDigitButton from './buttons'

export default (function calculator() {
  createElements();
})();

// // instantiate the calculator to the DOM
// (function calculator() {
//   createElements();
// })();

// function createDigitButton (calculator, digit) {
//   var button = document.createElement('input');
//   button.type = 'button';
//   button.value = digit;
//   button.onclick = function() {
//     calculator.answer.value += `${ digit }`;
//   };
//   button.className = 'number';
//   return button;
// }


function createElements () {
  // calculator container
  var title = document.createElement('h1');
  var titleText = document.createTextNode('calcJS');
  title.appendChild(titleText);
  document.body.appendChild(title);
  
  // CALCULATOR BUTTONS
  
  var calcContainer = document.createElement('div');
  calcContainer.className = 'calcContainer';
  document.body.appendChild(calcContainer);
  
  var calculator = document.createElement('form');
  calculator.name = 'calculator';
  calcContainer.appendChild(calculator);
  
  var answer = document.createElement('input');
  answer.type = 'text';
  answer.name = 'answer';
  answer.className = 'answer';
  calculator.appendChild(answer);
  
  // FIRST ROW
  var firstRow = document.createElement('div');
  firstRow.className = 'firstRow';
  calculator.appendChild(firstRow);
  
  // 7
  firstRow.appendChild(createDigitButton(calculator, 7));

  // 8
  firstRow.appendChild(createDigitButton(calculator, 8));
  
  // 9
  firstRow.appendChild(createDigitButton(calculator, 9));

  // +
  var add = document.createElement('input');
  add.type = 'button';
  add.value = '+';
  add.onclick = function() {
    calculator.answer.value += '+';
  };
  firstRow.appendChild(add);
  add.className = 'add operator';
  
  // SECOND ROW
  var secondRow = document.createElement('div');
  secondRow.className = 'secondRow';
  calculator.appendChild(secondRow);

  //  4
  secondRow.appendChild(createDigitButton(calculator, 4));
  
  // 5
  secondRow.appendChild(createDigitButton(calculator, 5));
  
  // 6
  secondRow.appendChild(createDigitButton(calculator, 6));
  
  // -
  var subtract = document.createElement('input');
  subtract.type = 'button';
  subtract.value = '-';
  subtract.onclick = function() {
    calculator.answer.value += '-';
  };
  secondRow.appendChild(subtract);
  subtract.className = 'subtract operator';
  
  
  // THIRD ROW
  var thirdRow = document.createElement('div');
  thirdRow.className = 'thirdRow';
  calculator.appendChild(thirdRow);
  
  // 1
  thirdRow.appendChild(createDigitButton(calculator, 1));

  // 2
  thirdRow.appendChild(createDigitButton(calculator, 2));

  // 3
  thirdRow.appendChild(createDigitButton(calculator, 3));
  
  // *
  var multiply = document.createElement('input');
  multiply.type = 'button';
  multiply.value = '*';
  multiply.onclick = function() {
    calculator.answer.value += '*';
  };
  thirdRow.appendChild(multiply);
  multiply.className = 'multiply operator';
  
  
  // FOURTH ROW
  var fourthRow = document.createElement('div');
  fourthRow.className = 'fourthRow'
  calculator.appendChild(fourthRow);
  
  // 0
  fourthRow.appendChild(createDigitButton(calculator, 0));

  // .
  var decimal = document.createElement('input');
  decimal.type = 'button';
  decimal.value = '.';
  decimal.onclick = function() {
    calculator.answer.value += '.';
  };
  fourthRow.appendChild(decimal);
  decimal.className = 'decimal operator';
  
  // /
  var divide = document.createElement('input');
  divide.type = 'button';
  divide.value = '/';
  divide.onclick = function() {
    calculator.answer.value += '/';
  };
  fourthRow.appendChild(divide);
  divide.className = 'divide operator';
  
  
  var fifthRow = document.createElement('div');
  fifthRow.className = 'fifthRow';
  calculator.appendChild(fifthRow);
  
  // C
  var clear = document.createElement('input');
  clear.type = 'button';
  clear.value = 'C';
  clear.onclick = function() {
    calculator.answer.value = '';
  };
  fifthRow.appendChild(clear);
  clear.className = 'clear';
  
  // =
  var calculate = document.createElement('input');
  calculate.type = 'button';
  calculate.value = '=';
  calculate.onclick = function() {
    calculator.answer.value = eval(calculator.answer.value);
  };
  fifthRow.appendChild(calculate);
  calculate.className = 'calculate';
}

console.log('calculator app loaded');

