// Problem: Write a function that determines and returns the UTF-16 string value of a string passed in as an argument.

// Algorithm
// Take length of the string - 1; this is our Max index.
// Init sum variable to 0
// Iterate from 0 until Max Index
  // add StringArg.charCodeAt(index) to sum
// return sum

function utf16Value(text) {
  let maxIndex = text.length - 1
  let sum = 0
  for (let i = 0; i <= maxIndex; i += 1) {
    sum += text.charCodeAt(i)
  }
  console.log(sum)
}

utf16Value('Four score');         // 984
utf16Value('Launch School');      // 1251
utf16Value('a');                  // 97
utf16Value('');                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
utf16Value(OMEGA);                  // 937
utf16Value(OMEGA + OMEGA + OMEGA);  // 2811