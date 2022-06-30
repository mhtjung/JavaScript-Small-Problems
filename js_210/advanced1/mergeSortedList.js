// WRite a function that takes two sorted arrays as arguments and returns a new array
// that contains all the elements from both input arrays in sorted order.

// You may not provide any solution that requires you to sort the result array. You must build the result array
// one element at a time in the proper order.

// Your solution should not mutate any input arrays:

// Algorithm
  // Make copies of each array
  // While these copies still have elements in them
    // Select the first element from each array.
      // If an element is undefined, append the result from the non undefined
    // Otherwise, compare the two elements
      // Append the larger

function merge(array1, array2) {
  [array1, array2] = [array1.slice(), array2.slice()]
  let result = []
  while (array1.length > 0 || array2.length > 0) {
    let newValue = removeSmallestValue(array1, array2)
    result = result.concat(newValue)
  }
  console.log(result);
  return result
}

function removeSmallestValue(array1, array2) {
  let arr1Element = array1[0]
  let arr2Element = array2[0]

  if (arr1Element === undefined) {
    return [array2.shift()]
  } else if (arr2Element === undefined) {
    return [array1.shift()]
  } else if (arr1Element > arr2Element) {
    return [array2.shift()]
  } else if (arr2Element > arr1Element) {
    return [array1.shift()]
  } else {
    return [array1.shift(), array2.shift()]
  }
}

merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
merge([], [1, 4, 5]);             // [1, 4, 5]
merge([1, 4, 5], []);             // [1, 4, 5]