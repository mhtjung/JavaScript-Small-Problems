// Write a function that takes an array argument and returns a new array that contains the values from the
// input array in sorted order. The function should sort the array using the merge sort algorithm as described
// above. You may assume that every element of the array will be of the same data type -- either all numbers or all strings.

// Feel free to use the merge function you wrote in the previous exercise.

// algorithm
  // Take advantage of the previously written merge function to sort the subarrays

  // Break down the input array into an array of subarrays
    //

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  let subArr1 = array.slice(0, array.length/2);
  let subArr2 = array.slice(array.length / 2);

  subArr1 = mergeSort(subArr1)
  subArr2 = mergeSort(subArr2)

  return merge(subArray1, subArray2)
}


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

  if (arr1Element === undefined || arr1Element > arr2Element) {
    return [array2.shift()]
  } else if (arr2Element === undefined || arr2Element > arr1Element) {
    return [array1.shift()]
  } else {
    return [array1.shift(), array2.shift()]
  }
}