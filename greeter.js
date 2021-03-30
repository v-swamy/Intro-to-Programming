let rlSync = require('readline-sync');

function getName() {
  let firstName = rlSync.question('What is your first name?  ');
  let lastName = rlSync.question('What is your last name?  ');
  return firstName + ' ' + lastName
}

console.log(`Hello, ${getName()}!`);
