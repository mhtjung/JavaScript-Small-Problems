// The shift method removes the first element from an array and returns the element;
  // If the array is empty, return undefined.

// The unshift method adds one or more elements to the start of an array and returns
// the new length of the array.

// Both methods mutate the original array.

function shift(array) {
  let result
  if (array.length !== 0 ) {
    result = array.splice(0, 1).pop();
  }
  return result
}

function shiftNoSplice(array) {
  if (array.length <= 0) {
    return undefined
  }
  let element = array[0]
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i + 1]
  }
  array.length -= 1
  return element
}

function unshift(array, ...args) {
  for (let i = 0; i < args.length; i += 1) {
    array.splice(i, 0, args[i]);
  }
  return array.length;
}