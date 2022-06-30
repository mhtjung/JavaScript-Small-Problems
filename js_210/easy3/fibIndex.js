// Write a function that calculates and returns the index of the first fibonacci number 
// That has the number of digits specified by the argument.


// Return index of 1 if 1 is input.
// Start with base fibonacci sequence of 1, 1, 2
  // Start counter at 3.
  
  function findFibonacciIndexByLength(length) {
    let first = 1n;
    let second = 1n;
    let count = 2n;
    let fibonacci;
  
    do {
      fibonacci = first + second;
      count += 1n;
      first = second;
      second = fibonacci;
    } while (String(fibonacci).length < length);
  
    return count;
  }