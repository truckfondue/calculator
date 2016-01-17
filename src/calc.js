// instantiate the calculator to the DOM
(function calculator() {
  createElements();
})();

function createElements () {
  // calculator container
  var title = document.createElement('h1');
  var titleText = document.createTextNode('JavaScript Calculator');
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
  var seven = document.createElement('input');
  seven.type = 'button';
  seven.value = 7;
  seven.onclick = function() {
    calculator.answer.value += '7';
  };
  firstRow.appendChild(seven);
  seven.className = 'seven number';
  
  // 8
  var eight = document.createElement('input');
  eight.type = 'button';
  eight.value = 8;
  eight.onclick = function() {
    calculator.answer.value += '8';
  };
  firstRow.appendChild(eight);
  eight.className = 'eight number';
  
  // 9
  var nine = document.createElement('input');
  nine.type = 'button';
  nine.value = 9;
  nine.onclick = function() {
    calculator.answer.value += '9';
  };
  firstRow.appendChild(nine);
  nine.className = 'nine number';
  
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
  var four    = document.createElement('input');
  four.type = 'button';
  four.value = 4;
  four.onclick = function() {
    calculator.answer.value += '4';
  };
  secondRow.appendChild(four);
  four.className = 'four number';
  
  // 5
  var five    = document.createElement('input');
  five.type = 'button';
  five.value = 5;
  five.onclick = function() {
    calculator.answer.value += '5';
  };
  secondRow.appendChild(five);
  five.className = 'five number';
  
  // 6
  var six = document.createElement('input');
  six.type = 'button';
  six.value = 6;
  six.onclick = function() {
    calculator.answer.value += '6';
  };
  secondRow.appendChild(six);
  six.className = 'six number';
  
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
  var one = document.createElement('input');
  one.type = 'button';
  one.value = 1;
  one.onclick = function() {
    calculator.answer.value += '1';
  };
  thirdRow.appendChild(one);
  one.className = 'one number';
  
  // 2
  var two     = document.createElement('input');
  two.type = 'button';
  two.value = 2;
  two.onclick = function() {
    calculator.answer.value += '2';
  };
  thirdRow.appendChild(two);
  two.className = 'two number';
  
  // 3
  var three   = document.createElement('input');
  three.type = 'button';
  three.value = 3;
  three.onclick = function() {
    calculator.answer.value += '3';
  };
  thirdRow.appendChild(three);
  three.className = 'three number';
  
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
  fourthRow.className = 'fourthRow';
  calculator.appendChild(fourthRow);
  
  // 0
  var zero = document.createElement('input');
  zero.type = 'button';
  zero.value = 0;
  zero.onclick = function() {
    calculator.answer.value += '0';
  };
  fourthRow.appendChild(zero);
  zero.className = 'zero number';
  
  // %
  // var modulus = document.createElement('input');
  // modulus.type = 'button';
  // modulus.value = '%';
  // modulus.onclick = function() {
  //   calculator.answer.value += '%';
  // };
  // fourthRow.appendChild(modulus);
  // modulus.className = 'modulus operator';
 
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
