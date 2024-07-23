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

console.log(add(2, 4));
console.log(subtract(4, 2));
console.log(multiply(2, 4));
console.log(divide(4, 2));
console.log(add(1));