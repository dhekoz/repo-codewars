// return arr.map(word =>
//     word
//       .toUpperCase()
//       .split('')
//       .reduce(
//         (total, char, index) => total + (char.charCodeAt() === index + 65),
//         0
//       ))

// //cara dua
// const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  
// return arr.map(word => {
//   const result = [...word].reduce((total, char, index) => {
//     const indexInAlphabet = alphabet.findIndex(
//       alphabetChar => alphabetChar === char.toLowerCase()
//     )
//     return index === indexInAlphabet ? total + 1 : total
//   }, 0)
//   return result
// })


array = [];
const empty = arr => arr.length = 0;

var array = [0, 1, 2, 3, 4, 5];
console.log(array);


// const data = 5

// 1223334444555554444333221
// #22333444455555444433322#
// ###3334444555554444333###
// ######4444555554444######
// ##########55555##########