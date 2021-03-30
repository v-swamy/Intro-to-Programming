function isItNegativeZero(value) {
  return 1 / value === -Infinity;
}

console.log(isItNegativeZero(-0));