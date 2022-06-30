// Write a function that takes two array arguments, each containing a list of numbers, and returns
// a new array containing the products of all combinations of number pairs that exist between the two arrays.

function multiplyAllPairs(arr1, arr2) {
  function oneMultArray(element, array) {
    return array.map( (arrElement) => element * arrElement )
  }
  
  function determineLongest(arr1, arr2) {
    let longest
    let shortest
    if (arr1.length > arr2.length) {
      [longest, shortest] = [arr1, arr2];
    } else if (arr2.length > arr1.length) {
      [longest, shortest] = [arr2, arr1]
    } else {
      [longest, shortest] = [arr1, arr2]
    }
    return [longest, shortest]
  }
  let longest
  let shortest
  [longest, shortest] = determineLongest(arr1, arr2)
  let result = []
  for (let i = 0; i < longest.length; i++) {
    let products = oneMultArray(longest[i], shortest)
    result = result.concat(products)
  }
  console.log(result.sort((a,b) => a - b));
}

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]
