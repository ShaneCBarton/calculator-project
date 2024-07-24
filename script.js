let firstDigit = 0;
let secondDigit = 0;
let operator = "";
const resultText = document.querySelector(".result");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.classList.contains("num")) {
            resultText.textContent += button.value;
        } else if (button.classList.contains("add")) {
            firstDigit = Number(resultText.textContent);
            resultText.textContent = "";
            operator = "add";
        } else if (button.classList.contains("subtract")) {
            firstDigit = Number(resultText.textContent);
            resultText.textContent = "";
            operator = "subtract";
        } else if (button.classList.contains("multiply")) {
            firstDigit = Number(resultText.textContent);
            resultText.textContent = "";
            operator = "multiply";
        } else if (button.classList.contains("divide")) {
            firstDigit = Number(resultText.textContent);
            resultText.textContent = "";
            operator = "divide";
        } else if (button.classList.contains("clear")) {
            resultText.textContent = "";
            firstDigit = 0;
            secondDigit = 0;
            operator = "";
        } else if (button.classList.contains("equals")) {
            secondDigit = Number(resultText.textContent);
            if (operator === "divide" && secondDigit === 0) {
                resultText.textContent = "Error";
                return;
            }
            resultText.textContent = "";
            resultText.textContent = operate(firstDigit, operator, secondDigit);
        }
    })
});


function add(){
    let sum = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

function subtract() {
    let sum = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        sum -= arguments[i];
    }
    return sum;
}

function multiply() {
    let sum = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        sum *= arguments[i];
    }
    return sum;
}

function divide() {
    let sum = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        sum /= arguments[i];
    }
    return sum;
}

function operate(num, operator, numTwo) {
    switch (operator) {
        case "add":
            return add(num, numTwo);
        case "subtract":
            return subtract(num, numTwo);
        case "multiply":
            return multiply(num, numTwo);
        case "divide":
            return divide(num, numTwo);
        default :
            break;
    }
}