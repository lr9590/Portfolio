var screen = document.querySelector("#js-screen");
var firstNumber = document.querySelector("#js-screen").value;
var numberButton = document.querySelectorAll(".js-number");
var operatorButtons = document.querySelectorAll(".js-operator");
var calculate = document.querySelector(".js-result");
var operator;

function calculateValue() {
  screen.value = eval(screen.value);
}

calculate.addEventListener("click", calculateValue);

function numberClicked() {
  if(screen.value === "0") {
  screen.value = event.target.value;
}
  else {
    screen.value += event.target.value;
  }
}

function operatorClicked() {
  screen.value += event.target.value;
  operator = event.target.value;
  if(operator === "AC") {
    screen.value = 0;
    firstNumber = 0;
    waitingForSecondNumber = false;
    secondNumber = 0;
  }
}


for( var i = 0; i < numberButton.length; i++) {
  numberButton[i].addEventListener("click", numberClicked);
}

for(var t = 0; t < operatorButtons.length; t++ ) {
  operatorButtons[t].addEventListener("click", operatorClicked);
}
