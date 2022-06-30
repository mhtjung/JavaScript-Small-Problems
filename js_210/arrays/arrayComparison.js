// Write a function so that two arrays containing the same values -- but in a different order -- are considered equal.

// Make copies of both arrays
// Sort both copies
// Compare element by element


function areArraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log(false)
    return false
  }
  
  let copy1 = arr1.slice().sort();
  let copy2 = arr2.slice().sort();
  
  for (let i = 0; i < copy1.length; i++ ) {
    if (copy1[i] === copy2[i]) {
      continue
    } else {
      console.log(false)
      return false
    }
  }
  console.log(true)
}

areArraysEqual([1, 2, 3], [1, 2, 3]);                  // true
areArraysEqual([1, 2, 3], [3, 2, 1]);                  // true
areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']);      // true
areArraysEqual(['1', 2, 3], [1, 2, 3]);                // false
areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]);            // true
areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]);            // false
areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]);            // false
areArraysEqual([1, 1, 2], [1, 2, 2]);                  // false
areArraysEqual([1, 1, 1], [1, 1]);                     // false
areArraysEqual([1, 1], [1, 1]);                        // true