// Modify your transpose function from the previous exercise so that it works with any MxN matrix
// With at least one row and one column.

function transpose(matrix) {
  let result = [];
  for (let i = 0; i < matrix[0].length; i++) {
    let row = [];
    matrix.forEach( array => row.push(array[i]));
    result.push(row);
  }
  console.log(result);
  return result
}

transpose([[1, 2, 3, 4]]);            // [[1], [2], [3], [4]]
transpose([[1], [2], [3], [4]]);      // [[1, 2, 3, 4]]
transpose([[1]]);                     // [[1]]
transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]);
