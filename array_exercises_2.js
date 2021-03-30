// function oddLengths(strings) {
//   return strings.reduce((filteredNumbersArray, letters) => {
//     let length = letters.length;
//     if (length % 2 === 1) {
//       filteredNumbersArray.push(length);
//     }

//     return filteredNumbersArray;
//   }, []);
// }




function oddLengths(array) {
  return array.reduce((lengthsArray, string) => {
    if (string.length % 2 === 1) {
      lengthsArray.push(string.length);
    }
    
    return lengthsArray;
  }, []);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));