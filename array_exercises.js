// let myArray = [
//   [1, 3, 6, 11],
//   [4, 2, 4],
//   [9, 17, 16, 0],
// ];
// myArray.forEach(innerArray => {
//   let evenArray = innerArray.filter(num => num % 2 === 0);
//   evenArray.forEach(num => console.log(num));
// })

// console.log(myArray);

// let myArray = [
//   1, 3, 6, 11,
//   4, 2, 4, 9,
//   17, 16, 0,
// ];

// let newArray = myArray.map(element => {
//   if (element % 2 === 0) return 'even';
//   else return 'odd';
// })

// console.log(newArray);

// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

// function oddLengths(array) {
//   let arrayLengths = array.map(element => element.length);
//   let oddOnes = arrayLengths.filter(length => length % 2 !== 0)
//   return oddOnes;
// }


// console.log(oddLengths(arr)); // => [1, 5, 3]

// function sumOfSquares(array) {
//   let result = array.reduce((total, element) => total + (element * element));
//   return result;
// }

// let array = [3, 5, 7];
// console.log(sumOfSquares(array)); // => 83

//#8

function oddLengths(array) {
  array.reduce((filteredArray, string) => {
    filteredArray.concat(string.length);
  }, []);
}

// function oddLengths(array) {
//   return array.reduce((filteredArray, string) => {
//     return filteredArray.concat(string.length % 2 === 1 ? string.length : null);
//     }, []);
// }
  

// array.reduce((newArray, string) => {
//   if (string.length % 2 === 1 ) {
//     return newArray.concat(string.length);
//   }
// }, []);

// function oddLengths(strings) {
//   return strings.reduce((filteredNumbersArray, letters) => {
//     let length = letters.length;
//     if (length % 2 === 1) {
//       filteredNumbersArray.push(length);
//     }

//     return filteredNumbersArray;
//   }, []);
// }



let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]