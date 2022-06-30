// The slice functiont akes three arguments:
  // An array
  // Two integers, representing beginning and end index.
// The function retruns a new array containing the extracted elements starting from
  // begin up to (but not including) end.
  // Slice does not mutate the original array.
// Requirements:
  // The values of begin and end will always be integers greater than or equal to 0.
  // If the value of begin or end is greater than the length of the array, set it equal to the length.


  function slice(array, start, end) {
    let result = [];
    if (start > array.length) {
      start = array.length;
    }
    if (end > array.length) {
      end = array.length
    }
    for (let i = start; i < end; i++ ) {
      result.push(array[i])
    }
    console.log(result);
    return result;
  }

slice([1, 2, 3], 1, 2);               // [2]
slice([1, 2, 3], 2, 0);               // []
slice([1, 2, 3], 5, 1);               // []
slice([1, 2, 3], 0, 5);               // [1, 2, 3]

function slice(array, begin, end) {
  const result = [];

  begin = begin > array.length ? array.length : begin;
  end = end > array.length ? array.length : end;

  for (let i = begin; i < end; i += 1) {
    result.push(array[i]);
  }

  return result;
}

function splice(array, start, deleteCount, ...args) {
  start = start > array.length ? array.length : start;
  deleteCount = deleteCount > (array.length - start) ? array.length - start : deleteCount;

  const arrayCopy = slice(array, 0, array.length);
  const elementCount = args.length;
  const newLength = array.length + elementCount - deleteCount;
  array.length = newLength;

  for (let i = 0; i < elementCount; i += 1) {
    array[start + i] = args[i];
  }

  let copyBackCount = arrayCopy.length - (start + deleteCount);
  for (let i = 0; i < copyBackCount; i += 1) {
    array[start + elementCount + i] = arrayCopy[start + deleteCount + i];
  }

  return slice(arrayCopy, start, start + deleteCount);
}