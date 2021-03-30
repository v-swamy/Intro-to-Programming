function isNotANumber(value) {
  if (typeof value === 'number' && value !== value) {
    return true;
  } else {
    return false;
  }
}

console.log(isNotANumber(6));