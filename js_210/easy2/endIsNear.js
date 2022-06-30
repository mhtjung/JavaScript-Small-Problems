// Write a function that returns the next to last word in the string passed to it as an argument.
  // Words are any sequence of non-blank characters.
  // You may assume that the Input String will always contain at least two words.

// Algorithm
  // Index of String Length - 1 should always be the penultimate element in the array

function penultimate(text) {
  let arr = text.split(' ');
  return arr[arr.length - 2]
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true