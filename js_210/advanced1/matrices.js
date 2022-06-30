// A 3x3 matrix can be represented by an arrays of arrays:
  // An outer array containing three subarrays that each contain three elements.
    // For example, the 3x3 matrix shown below.

// The transpose of a 3x3 matrix is the matrix that results from exchanging the rows and columns
// of the original matrix. For example, the transposition of the matrix shown above is:

// Write a function that takes an array of arrays that represent a 3x3 matrix and transposes the matrix.


// Algorithm
  // Iterate from 0 to the length of the input array
    // At every iteration, loop over the inner arrays and select their ith element, place it into an array and add it to the results array


function transpose(matrix) {
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    let row = [];
    matrix.forEach( array => row.push(array[i]));
    result.push(row);
  }
  return result
}

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

const newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]