let numKeys = [...document.querySelectorAll(".key.num")];
let displayText = document.querySelector(".display p");
let operationKeys = [...document.querySelectorAll(".key.function")];
let operateKey = document.querySelector(".operate");
let clearKey = document.querySelector(".clear");
/////
let inputArray = [];
let firstNum = false;
let currentOperation = "none"


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
  displayText.textContent += this.dataset.key;
  inputArray.push(this.dataset.key)
}

function operationKeyPress() {
  if (!firstNum) {
    firstNum = Number(inputArray.join(""));
    currentOperation = this.dataset.key;
    inputArray = [];
  }
}

function operatePress() {
  if (inputArray.length > 0 && currentOperation !== "none") {
    let secondNum = Number(inputArray.join(""));
    firstNum = operate(currentOperation, firstNum, secondNum);
    displayText.textContent = firstNum;
    inputArray = [];
  } else if (currentOperation !== "none") {
    firstNum = operate(currentOperation, firstNum, firstNum);
    displayText.textContent = firstNum;
  }
}

function clearPress() {
  inputArray = [];
  firstNum = false;
  currentOperation = "none"
  displayText.textContent = "";
}


numKeys.forEach(key => key.addEventListener("click", numKeyPress))
operationKeys.forEach(key => key.addEventListener("click", operationKeyPress))
operateKey.addEventListener("click", operatePress);
clearKey.addEventListener("click", clearPress);


///
