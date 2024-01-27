/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2){
    return number1 + number2;
}
function addNumbers() {
    const add1 = parseFloat(document.getElementById('add1').value);
    const add2 = parseFloat(document.getElementById('add2').value);
    document.getElementById('sum').value = add(add1, add2);
}
document.getElementById('addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
function subtract (number1, number2){
    return number1 - number2;
}
const subtractNumbers = () => {
    const subtract1 = parseFloat(document.getElementById('subtract1').value);
    const subtract2 = parseFloat(document.getElementById('subtract2').value);
    document.getElementById('difference').value = subtract(subtract1, subtract2);
};
document.getElementById('subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;
const multiplyNumbers = () => {
    const factor1 = parseFloat(document.getElementById('factor1').value);
    const factor2 = parseFloat(document.getElementById('factor2').value);
    document.getElementById('product').value = multiply(factor1, factor2);
};
document.getElementById('multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */
function divide(number1, number2) {
    return number1 / number2;
}
function divideNumbers() {
    const dividend = parseFloat(document.getElementById('dividend').value);
    const divisor = parseFloat(document.getElementById('divisor').value);
    document.getElementById('quotient').value = divide(dividend, divisor);
}
document.getElementById('divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
document.getElementById('getTotal').addEventListener('click', () => {
    const subtotal = parseFloat(document.getElementById('subtotal').value);
    const isMember = document.getElementById('member').checked;
    const discount = isMember ? 0.2 : 0;
    const total = subtotal * (1 - discount);
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
});

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const numbersArray = Array.from({ length: 13 }, (_, index) => index + 1);
document.getElementById('array').textContent = numbersArray;
/* Output Odds Only Array */
const oddNumbers = numbersArray.filter(number => number % 2 !== 0);
document.getElementById('odds').textContent = oddNumbers;
/* Output Evens Only Array */
const evenNumbers = numbersArray.filter(number => number % 2 === 0);
document.getElementById('evens').textContent = evenNumbers;
/* Output Sum of Org. Array */
const sumOfArray = numbersArray.reduce((acc, curr) => acc + curr, 0);
document.getElementById('sumOfArray').textContent = sumOfArray;
/* Output Multiplied by 2 Array */
const multipliedArray = numbersArray.map(number => number * 2);
document.getElementById('multiplied').textContent = multipliedArray;
/* Output Sum of Multiplied by 2 Array */
const sumOfMultiplied = multipliedArray.reduce((acc, curr) => acc + curr, 0);
document.getElementById('sumOfMultiplied').textContent = sumOfMultiplied;