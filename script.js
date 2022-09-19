//buttons
const CLEAR_BTN = document.getElementById("clear");
const DEL_BTN = document.getElementById("del");
const NUM_BTN = document.querySelectorAll(".button-num");
const OPERATOR_BTN = document.querySelectorAll(".button-operator");
const EQUAL_BTN = document.getElementById("equal");
const CURRENT_OPERAND = document.querySelector(".current-operand");
const PREVIOUS_OPERAND = document.querySelector(".previous-operand");

//display
const DISPLAY = document.querySelector(".display");

//buttons event listeners
CLEAR_BTN.addEventListener("click", () => {
  CURRENT_OPERAND.innerHTML = null;
  PREVIOUS_OPERAND.innerHTML = null;
});
DEL_BTN.addEventListener("click", () => {
  CURRENT_OPERAND.textContent = CURRENT_OPERAND.textContent
    .toString()
    .slice(0, -1);
});

NUM_BTN.forEach((button) =>
  button.addEventListener("click", () => {
    CURRENT_OPERAND.innerHTML += button.textContent;
  })
);

function clearOperand() {
  CURRENT_OPERAND.innerHTML = null;
}

OPERATOR_BTN.forEach((button) => {
  button.addEventListener("click", () => {
    CURRENT_OPERAND.innerHTML += button.textContent;
    PREVIOUS_OPERAND.innerHTML = CURRENT_OPERAND.textContent;
    clearOperand();
  });
});

EQUAL_BTN.addEventListener("click", () => {
  operate(operator, num1, num2);
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
