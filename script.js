//buttons
const CLEAR_BTN = document.getElementById("clear");
const DEL_BTN = document.getElementById("del");
const NUM_BTN = document.querySelectorAll(".button-num");
const OPERATOR_BTN = document.querySelectorAll(".button-operator");
const EQUAL_BTN = document.getElementById("equal");
//display
const DISPLAY = document.querySelector(".display");

CLEAR_BTN.addEventListener("click", () => {
  DISPLAY.innerHTML = "0";
});
DEL_BTN.addEventListener("click", () => {
  DISPLAY.textContent = DISPLAY.textContent.toString().slice(0, -1);
});

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

console.log(add(10, 5));
console.log(subtract(10, 5));
console.log(multiply(10, 5));
console.log(divide(10, 5));

function operate(operator, num1, num2) {
  if (operator == "+") {
    return add(num1, num2);
  } else if (operator == "-") {
    return subtract(num1, num2);
  } else if (operator == "-") {
    multiply(num1, num2);
  } else if (operator == "/") {
    return divide(num1, num2);
  } else console.log("error");
}

console.log(operate("/", 5, 9));

function addToDisplay(element) {
  DISPLAY.innerHTML = DISPLAY += element.value;
}
