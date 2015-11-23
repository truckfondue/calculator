require('./utils');

(function calculatorFunctions() {
  createElements();
})();

function createElements () {
  // calculator container
  var title = document.createElement('h1');
  var titleText = document.createTextNode('JavaScript Calculator');
  title.appendChild(titleText);
  document.body.appendChild(title);
  
  // CALCULATOR BUTTONS
  
  // create an element
  // create the elements text
  // append the text to the DOM element
  // append element the element to the body
  // repeat...
  
  // 1
  var one            = document.createElement('div');
  var oneContent     = document.createTextNode('1');
  one.appendChild(oneContent);
  document.body.appendChild(one);
  one.className = 'one number';
  
  // 2
  var two     = document.createElement('div');
  var twoContent     = document.createTextNode('2');
  two.appendChild(twoContent);
  document.body.appendChild(two);
  two.className = 'two number';
  
  // 3
  var three   = document.createElement('div');
  var threeContent   = document.createTextNode('3');
  three.appendChild(threeContent);
  document.body.appendChild(three);
  three.className('three number');
  
  //  4
  var four    = document.createElement('div');
  var fourContent    = document.createTextNode('4');
  four.appendChild(fourContent);
  document.body.appendChild(four);
  four.className('four number');
  
  // 5
  var five    = document.createElement('div');
  var fiveContent    = document.createTextNode('5');
  five.appendChild(fiveContent);
  document.body.appendChild(five);
  five.className('five number');
  
  // 6
  var six     = document.createElement('div');
  var sixContent     = document.createTextNode('6');
  six.appendChild(sixContent);
  document.body.appendChild(six);
  six.className('six number');
  
  // 7
  var seven   = document.createElement('div');
  var sevenContent   = document.createTextNode('7');
  seven.appendChild(sevenContent);
  document.body.appendChild(seven);
  seven.className('seven number');
  
  // 8
  var eight   = document.createElement('div');
  var eightContent   = document.createTextNode('8');
  eight.appendChild(eightContent);
  document.body.appendChild(eight);
  eight.className('eight number');
  
  // 9
  var nine    = document.createElement('div');
  var nineContent    = document.createTextNode('9');
  nine.appendChild(nineContent);
  document.body.appendChild(nine);
  nine.className('nine number');
  
  // .
  var decimal = document.createElement('div');
  var decimalContent = document.createTextNode('.');
  decimal.appendChild(decimalContent);
  document.body.appendChild(decimal);
  decimal.className('decimal');

  // C
  var clear     = document.createElement('div');
  var clearContent     = document.createTextNode('C');
  clear.appendChild(clearContent);
  document.body.appendChild(clear);
  clear.className('clear');
  
  // +/-
  var sign      = document.createElement('div');
  var signContent      = document.createTextNode('+/-');
  sign.appendChild(signContent);
  document.body.appendChild(sign);
  sign.className('sign');
  
  // %
  var modulus   = document.createElement('div');
  var modulusContent   = document.createTextNode('%');
  modulus.appendChild(modulusContent);
  document.body.appendChild(modulus);
  modulus.className('modulus');
  
  // /
  var divide    = document.createElement('div');
  var divideContent    = document.createTextNode('/');
  divide.appendChild(divideContent);
  document.body.appendChild(divide);
  divide.className('divide');
  
  // *
  var multiply  = document.createElement('div');
  var multiplyContent  = document.createTextNode('*');
  multiply.appendChild(multiplyContent);
  document.body.appendChild(multiply);
  multiply.className('multiply');
  
  // -
  var subtract  = document.createElement('div');
  var subtractContent  = document.createTextNode('-');
  subtract.appendChild(subtractContent);
  document.body.appendChild(subtract);
  subtract.className('subtract');
  
  // +
  var add       = document.createElement('div');
  var addContent       = document.createTextNode('+');
  add.appendChild(addContent);
  document.body.appendChild(add);
  add.className('add');
  
  // =
  var calculate = document.createElement('div');
  var calculateContent = document.createTextNode('=');
  calculate.appendChild(calculateContent);
  document.body.appendChild(calculate);
  calculate.className('calculate');
}


console.log('calculator app loaded');
