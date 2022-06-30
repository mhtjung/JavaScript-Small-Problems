// Write a function that takes a string argument and returns a new string that contains the values of the original string
// With all consecutive duplicate characters collapsed into a single character.

// Init results array.
// Take word and split into characters.
  // Shift first letter off array and into results
  // Iterate through remaining letters.
    // If letter matches last letter in results array, skip.

function crunch(text) {
  let result = [];
  let chars = text.split('');
  result.push(chars[0]);

  for (let idx = 0; idx < chars.length; idx ++ ) {
    if (chars[idx] === result[result.length - 1]) {
      continue;
    } else {
      result.push(chars[idx]);
    }
  }
  return result.join('');
}

console.log(crunch('4444abcabccba'));
console.log(crunch('ddaaiillyy ddoouubbllee'));
console.log(crunch('ggggggggggggg'));
console.log(crunch('a'));
console.log(crunch(''));