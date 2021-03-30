
// function allMatches(wordsArray, regex) {
//   let matchArray = [];
//   wordsArray.forEach(word => {
//     if (regex.test(word)) {
//       matchArray.push(word);
//     }
//   });
//   return matchArray;
// }

function allMatches(wordsArray, regex) {
  return wordsArray.filter(word => regex.test(word));
}

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']