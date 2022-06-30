// Write a method named pop that removes the last element from an array and returns that element.
  // If it's called on an empty array, return undefined.

function pop(array) {
  if (array.length == 0) {
    return undefined
  }
  let result = array[array.length - 1]
  array.length -= 1
  return result
}

// pop
const array1 = [1, 2, 3];
pop(array1);                        // 3
console.log(array1);                // [1, 2]
console.log(pop([]));                           // undefined
console.log(pop([1, 2, ['a', 'b', 'c']]));      // ["a", "b", "c"]

// Write a method named push that adds one or more elements to the end of an array and returns the new length of the array.

function push(array, ...args) {
  for (let i = 0; i < args.length; i++) {
    array[array.length] = args[i]
  }
  return array.length
}

const array2 = [1, 2, 3];
push(array2, 4, 5, 6);              // 6
console.log(array2);   