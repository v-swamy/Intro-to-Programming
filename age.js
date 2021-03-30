let rlSync = require('readline-sync');

let age = Number(rlSync.question('What is your age?  '));

// console.log(`You are ${age} years old.`);
// console.log(`In 10 years, you will be ${age + 10} years old.`);

// 10 years, 20 years, 30 years, 40 years

for (let yearsToAdd = 10; yearsToAdd <= 40; yearsToAdd += 10) {
  console.log(`In ${yearsToAdd} years, you will be ${age + yearsToAdd} years old.`);
}