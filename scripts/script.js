


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



let numKeys = [...document.querySelectorAll(".key.num")];
let displayText = document.querySelector(".display p");

numKeys.forEach(key => key.addEventListener("click", numKeyPress))
let inputArray = [];

function numKeyPress(e) {
  console.log(this.dataset.key)
  displayText.textContent += this.dataset.key;
  inputArray.push(this.dataset.key)
}
