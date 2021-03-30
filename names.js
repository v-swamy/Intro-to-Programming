let names = ['Vik', 'Whitney', 'Sydney', 'Savi', 'Nora'];
let upperNames = [];

for (let index = 0; index < names.length; index++) {
  if (names[index] === 'Sydney') {
    continue;
  }

  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
}

console.log(upperNames);