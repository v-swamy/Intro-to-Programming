// function factorial(number) {
//   let result = 1;
//   for (let i = 1; i <= number; i += 1) {
//     result *= i;
//   }
//   return result;
// }

function factorial(number) {
  if (number === 1) return 1;
  return number * factorial(number - 1);
}

console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320