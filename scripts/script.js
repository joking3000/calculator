let numKeys = [...document.querySelectorAll(".key.num")];
let displayText = document.querySelector(".display p");
let operationKeys = [...document.querySelectorAll(".key.function")];
let operateKey = document.querySelector(".operate");
let clearKey = document.querySelector(".clear");
/////
let inputArray = [];
let firstNum = false;
let currentOperation = "none"
let storedNum = false;
let afterOperate = false;


function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}


function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b)
      break;
    case "-":
      return subtract(a, b)
      break;
    case "*":
      return multiply(a, b)
      break;
    case "/":
      return divide(a, b)
      break;
    default:
      return "Error";
  }
}


function numKeyPress() {
  if (inputArray.length === 0) displayText.textContent = "";
  displayText.textContent += this.dataset.key;
  inputArray.push(this.dataset.key)
}

function operationKeyPress() {
  if (!firstNum) {
    firstNum = Number(inputArray.join(""));
    currentOperation = this.dataset.key;
    inputArray = [];
  } else if (afterOperate) {
    currentOperation = this.dataset.key;
    storedNum = false;
  } else if (inputArray.length === 0 && currentOperation === this.dataset.key) {
    firstNum = operate(currentOperation, firstNum, firstNum)
    displayText.textContent = firstNum;
  } else if (inputArray.length === 0) {
    currentOperation = this.dataset.key;
  } else {
    let secondNum = Number(inputArray.join(""));
    firstNum = operate(currentOperation, firstNum, secondNum);
    displayText.textContent = firstNum;
    currentOperation = this.dataset.key;
    inputArray = [];
  }
  afterOperate = false;
}

function operatePress() {
  if (currentOperation === "none") return;
  if (inputArray.length > 0) {
    storedNum = Number(inputArray.join(""));
    firstNum = operate(currentOperation, firstNum, storedNum);
    displayText.textContent = firstNum;
    inputArray = [];
  } else if (!storedNum) {
    storedNum = firstNum
    firstNum = operate(currentOperation, firstNum, storedNum);
    displayText.textContent = firstNum;
  } else {
    firstNum = operate(currentOperation, firstNum, storedNum);
    displayText.textContent = firstNum;
  }
  afterOperate = true;
}

function clearPress() {
  inputArray = [];
  firstNum = false;
  currentOperation = "none"
  displayText.textContent = "";
  storedNum = false;
  afterOperate = false;
}


numKeys.forEach(key => key.addEventListener("click", numKeyPress))
operationKeys.forEach(key => key.addEventListener("click", operationKeyPress))
operateKey.addEventListener("click", operatePress);
clearKey.addEventListener("click", clearPress);


///
