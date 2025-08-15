const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clearBtn = document.getElementById("clear");
const equalBtn = document.getElementById("equal");

let currentInput = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");
    if (value) {
      currentInput += value;
      display.value = currentInput;
    }
  });
});

clearBtn.addEventListener("click", () => {
  currentInput = "";
  display.value = "";
});

equalBtn.addEventListener("click", () => {
  try {
    currentInput = eval(currentInput).toString();
    display.value = currentInput;
  } catch {
    display.value = "Error";
    currentInput = "";
  }
});
