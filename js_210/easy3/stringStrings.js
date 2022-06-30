// Write a function that takes one argument, a pos int, and returns a str of alternating 1s and 0s, always starting with 1.
// The length of the returned string should match the given integer.

function stringy(length) {
  result = []
  for (let idx = 0; idx < length; idx += 1) {
    if (idx % 2 == 0) {
      result.push('1')
    } else {
      result.push('0')
    }
  }
  console.log(result.join(''))
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"