// Write a function that displays an 8-pointed star in an nXn grid,
// where n is an odd integer that is supplied as an argument to the function.
// The smallest such star you need to handle is a 7x7 grid


// Rules:
  // Implicit:
    // The number of "rows" before the centerline is equal to the N/2 - 1
    // Generate an array of the "rows" before the enter line
    // Generate the center line

    // Log the rows
    // Log the center line
    // Log the rows reversed

// Row Generator
  // Given (n)
    // Create n/2 - 1 rows
  // All the rows should have a total length of n
  // Start with three stars with 0 space in between, increasing this value per iteration.
  // Append the resulting string to a results array
  // Return results array

function generateRows(integer) {
  let results = []
  let numberOfRows = integer/2 - 1
  for (let i = 0; i < numberOfRows; i++) {
  let innerPadding =' '.repeat(i);
  let innerTemplate = `*${innerPadding}*${innerPadding}*`;
  let outerPadding = ' '.repeat((integer - innerTemplate.length) / 2);
  let finalstring = `${outerPadding}${innerTemplate}${outerPadding}`
  results.push(finalstring)
  }
  return results
}

function stars(integer) {
  let topRows = generateRows(integer).reverse()
  let bottomRows = generateRows(integer)
  let centerLine = ['*'.repeat(integer)]
  let linesToPrint = topRows.concat(centerLine).concat(bottomRows)
  linesToPrint.forEach(line => console.log(line));
}

stars(9)