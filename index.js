const buttons = document.querySelectorAll(".button");
const screenDisplay = document.querySelector(".displayResult");
let calculation = [];

function calculate(button) {
  const value = button.textContent;
  if (value.toLowerCase() === "reset") {
    calculation = [];
    screenDisplay.value = calculation;
  } else if (value === "=") {
    if (calculation[0] == "*" || calculation[0] == "/") {
      alert("");
    } else {
      if (eval(calculation.join("")) || eval(calculation.join("")) === 0) {
        screenDisplay.value = eval(calculation.join(""));
      } else {
        alert("please enter the number");
      }
    }
  } else if (value === "DEL") {
    calculation.pop();
    screenDisplay.value = calculation.join("");
  } else {
    calculation.push(value);
    screenDisplay.value = calculation.join("");
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => calculate(button));
});
