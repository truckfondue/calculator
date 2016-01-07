/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _es6CalculatorJs = __webpack_require__(2);

	var _es6CalculatorJs2 = _interopRequireDefault(_es6CalculatorJs);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// instantiate the calculator to the DOM
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _buttons = __webpack_require__(3);

	var _buttons2 = _interopRequireDefault(_buttons);

	exports['default'] = (function calculator() {
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

	function createElements() {
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
	  firstRow.appendChild((0, _buttons2['default'])(calculator, 7));

	  // 8
	  firstRow.appendChild((0, _buttons2['default'])(calculator, 8));

	  // 9
	  firstRow.appendChild((0, _buttons2['default'])(calculator, 9));

	  // +
	  var add = document.createElement('input');
	  add.type = 'button';
	  add.value = '+';
	  add.onclick = function () {
	    calculator.answer.value += '+';
	  };
	  firstRow.appendChild(add);
	  add.className = 'add operator';

	  // SECOND ROW
	  var secondRow = document.createElement('div');
	  secondRow.className = 'secondRow';
	  calculator.appendChild(secondRow);

	  //  4
	  secondRow.appendChild((0, _buttons2['default'])(calculator, 4));

	  // 5
	  secondRow.appendChild((0, _buttons2['default'])(calculator, 5));

	  // 6
	  secondRow.appendChild((0, _buttons2['default'])(calculator, 6));

	  // -
	  var subtract = document.createElement('input');
	  subtract.type = 'button';
	  subtract.value = '-';
	  subtract.onclick = function () {
	    calculator.answer.value += '-';
	  };
	  secondRow.appendChild(subtract);
	  subtract.className = 'subtract operator';

	  // THIRD ROW
	  var thirdRow = document.createElement('div');
	  thirdRow.className = 'thirdRow';
	  calculator.appendChild(thirdRow);

	  // 1
	  thirdRow.appendChild((0, _buttons2['default'])(calculator, 1));

	  // 2
	  thirdRow.appendChild((0, _buttons2['default'])(calculator, 2));

	  // 3
	  thirdRow.appendChild((0, _buttons2['default'])(calculator, 3));

	  // *
	  var multiply = document.createElement('input');
	  multiply.type = 'button';
	  multiply.value = '*';
	  multiply.onclick = function () {
	    calculator.answer.value += '*';
	  };
	  thirdRow.appendChild(multiply);
	  multiply.className = 'multiply operator';

	  // FOURTH ROW
	  var fourthRow = document.createElement('div');
	  fourthRow.className = 'fourthRow';
	  calculator.appendChild(fourthRow);

	  // 0
	  fourthRow.appendChild((0, _buttons2['default'])(calculator, 0));

	  // .
	  var decimal = document.createElement('input');
	  decimal.type = 'button';
	  decimal.value = '.';
	  decimal.onclick = function () {
	    calculator.answer.value += '.';
	  };
	  fourthRow.appendChild(decimal);
	  decimal.className = 'decimal operator';

	  // /
	  var divide = document.createElement('input');
	  divide.type = 'button';
	  divide.value = '/';
	  divide.onclick = function () {
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
	  clear.onclick = function () {
	    calculator.answer.value = '';
	  };
	  fifthRow.appendChild(clear);
	  clear.className = 'clear';

	  // =
	  var calculate = document.createElement('input');
	  calculate.type = 'button';
	  calculate.value = '=';
	  calculate.onclick = function () {
	    calculator.answer.value = eval(calculator.answer.value);
	  };
	  fifthRow.appendChild(calculate);
	  calculate.className = 'calculate';
	}

	console.log('calculator app loaded');
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	// this function creates calculator buttons

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = createDigitButton;

	function createDigitButton(calculator, digit) {
	  var button = document.createElement('input');
	  button.type = 'button';
	  button.value = digit;
	  button.onclick = function () {
	    calculator.answer.value += '' + digit;
	  };
	  button.className = 'number';
	  return button;
	}

	module.exports = exports['default'];

/***/ }
/******/ ]);