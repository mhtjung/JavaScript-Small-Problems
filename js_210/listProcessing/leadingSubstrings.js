// Write a function that takes a string argument and returns a list of substrings
// of that string. Each substring should begin with the first letter of the word
// , and the list should be ordered from shortest to longest.

function leadingSubstrings(string) {
  let result = [];

  for (let endIndex = 1; endIndex <= string.length; endIndex++ ) {
    let substring = string.slice(0, endIndex);
    result.push(substring);
  }

  console.log(result);
}

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]