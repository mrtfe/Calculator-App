//buttons
const CLEAR_BTN = document.getElementById("clear");
const DEL_BTN = document.getElementById("del");
const NUM_BTN = document.querySelectorAll(".button-num");
const OPERATOR_BTN = document.querySelectorAll(".button-operator");
const EQUAL_BTN = document.getElementById("equal");
const CURRENT_OPERAND_DISPLAY = document.querySelector(".current-operand");
const PREVIOUS_OPERAND_DISPLAY = document.querySelector(".previous-operand");

let operator = "";

//display
const DISPLAY = document.querySelector(".display");

//function to clear display
function clearDisplay() {
  CURRENT_OPERAND_DISPLAY.innerHTML = null;
  PREVIOUS_OPERAND_DISPLAY.innerHTML = null;
}

//buttons event listeners
CLEAR_BTN.addEventListener("click", () => {
  clearDisplay();
});
DEL_BTN.addEventListener("click", () => {
  CURRENT_OPERAND_DISPLAY.textContent = CURRENT_OPERAND_DISPLAY.textContent
    .toString()
    .slice(0, -1);
});

NUM_BTN.forEach((button) =>
  button.addEventListener("click", () => {
    CURRENT_OPERAND_DISPLAY.innerHTML += button.textContent;
  })
);

function updateLowerDisplay() {
  CURRENT_OPERAND_DISPLAY.innerHTML = "";
}

OPERATOR_BTN.forEach((button) => {
  button.addEventListener("click", () => {
    operator = button.textContent;
    PREVIOUS_OPERAND_DISPLAY.innerHTML += CURRENT_OPERAND_DISPLAY.textContent;
    updateLowerDisplay();
  });
});

EQUAL_BTN.addEventListener("click", () => {
  const result = operate(
    operator,
    PREVIOUS_OPERAND_DISPLAY.textContent,
    CURRENT_OPERAND_DISPLAY.textContent
  );
  PREVIOUS_OPERAND_DISPLAY.textContent = "";
  CURRENT_OPERAND_DISPLAY.innerHTML = result;
});

function add(num1, num2) {
  console.log(`num1: ${num1}, num2: ${num2}, operator: ${operator}`);
  return parseInt(num1) + parseInt(num2);
}

function subtract(num1, num2) {
  console.log(`num1: ${num1}, num2: ${num2}, operator: ${operator}`);
  return parseInt(num1) - parseInt(num2);
}

function multiply(num1, num2) {
  console.log(`num1: ${num1}, num2: ${num2}, operator: ${operator}`);
  return parseInt(num1) * parseInt(num2);
}

function divide(num1, num2) {
  console.log(`num1: ${num1}, num2: ${num2}, operator: ${operator}`);
  return parseInt(num1) / parseInt(num2);
}

function operate(operator, num1, num2) {
  if (operator == "+") {
    console.log("add function called");
    return add(num1, num2);
  } else if (operator == "-") {
    console.log("sub function called");
    return subtract(num1, num2);
  } else if (operator == "*") {
    console.log("multi function called");
    multiply(num1, num2);
  } else if (operator == "/") {
    console.log("div function called");
    return divide(num1, num2);
  } else console.log("error");
}
