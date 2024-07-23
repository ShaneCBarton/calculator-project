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

let firstDigit = 0;
let secondDigit = 0;
let operator = "";

function operate(num, operator, numTwo) {
    switch (operator) {
        case "add":
            add(num, numTwo);
            break;
        case "subtract":
            subtract(num, numTwo);
            break;
        case "multiply":
            multiply(num, numTwo);
            break;
        case "divide":
            divide(num, numTwo);
            break;
        default :
            break;
    }
}