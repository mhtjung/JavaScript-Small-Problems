// reverse function should accept either a sring or an array as an argument
// It should return a new string or array


reverse('Hello');           // "olleH"
reverse('a');               // "a"
reverse([1, 2, 3, 4]);      // [4, 3, 2, 1]
reverse([]);                // []

const array = [1, 2, 3];
reverse(array);             // [3, 2, 1]
array;                      // [1, 2, 3]

function reverse(input) {
  let result
  Array.isArray(input) ? result = arrayReverse(input) : result = stringReverse(input);
  console.log(result);
  return result
}

function stringReverse(string) {
  let result = ""
  for (let i = string.length - 1; i >= 0; i-- ) {
    result += string[i]
  }
  return result
}

function arrayReverse(array) {
  let result = []
  for (let i = array.length - 1; i >= 0; i-- ) {
    result.push(array[i])
  }
  return result
}