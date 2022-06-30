// Write a function that returns a list of all substrings of a string. 
// Order the returned list by where in the string the substring begins. 
// This means that all substrings that start at index position 0 should come first, 
// then all substrings that start at index position 1, and so on. 
// Since multiple substrings will occur at each position, return the substrings at a given index from shortest to longest.

function substrings(string) {
  function leadingSubstrings(string) {
    let result = [];
  
    for (let endIndex = 1; endIndex <= string.length; endIndex++ ) {
      let substring = string.slice(0, endIndex);
      result.push(substring);
    }
  
    return result;
  }
  let result = []
  for (let index = 0; index < string.length; index++ ) {
    let copy = string.slice(index);
    let subs = leadingSubstrings(copy);
    result = result.concat(subs);
  }
  console.log(result);
  return result;
}



substrings('abcde');