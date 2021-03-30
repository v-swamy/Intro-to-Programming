let rlSync = require('readline-sync');

let firstNumber = rlSync.question('Enter the first number: ');
let secondNumber = rlSync.question('Enter the second number: ');

function multiply(a, b) {
  return a * b;
}

console.log(`${firstNumber} * ${secondNumber} = ${String(multiply(Number(firstNumber), Number(secondNumber)))}`);