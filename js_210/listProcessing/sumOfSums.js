// Write a function that takes an array of numbers and returns the sum of the sums of each leading subsequence in that array.
// Examine the examples to see what we mean. You may assume that the array always contains at least one number.

// Algorithm
  // Iterate over the array, creating a growing subarray
    // At each iteration, reduce the array to its sum and add it to the total
    // Return the total.


function sumOfSums(array) {
  let total = 0
  for (let i = 1; i <= array.length; i++ ) {
    let subArray = array.slice(0, i);
    let sum = subArray.reduce((accumulator, element) => accumulator + element);
    total += sum
  }
  console.log(total);
  return total;
}

sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35