// #3

// let myArray = {
//   0: 'property 1',
//   1: 'property 2',
//   2: 'property 3',
//   length: 3
// };

// for (let i = 0; i < myArray.length; i += 1) {
//   console.log(myArray[i]);
// }


// // #4

// let obj = {
//   b: 2,
//   a: 1,
//   c: 3,
// };

// let keys = Object.keys(obj);
// // let upperCaseKeys = [];
// // keys.forEach(key => upperCaseKeys.push(key.toUpperCase()));
// // console.log(upperCaseKeys);

// let upperCaseKeys = keys.map(key => key.toUpperCase());
// console.log(upperCaseKeys);

// #8

// let objToCopy = {
//   foo: 1,
//   bar: 2,
//   qux: 3,
// };

// function copyObj(object, keysArray) {
//   if (!keysArray) return Object.assign({}, object);
//   let objectCopy = {};
//   keysArray.forEach(key => {
//     objectCopy[key] = object[key];
//   })
//   return objectCopy;
// }

// let newObj = copyObj(objToCopy);
// console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

// let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
// console.log(newObj2);       // => { foo: 1, qux: 3 }

// let newObj3 = copyObj(objToCopy, [ 'bar' ]);
// console.log(newObj3);       // => { bar: 2 }

// #11

let obj = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};

obj.bar[3].xyz = 606;
console.log(obj);