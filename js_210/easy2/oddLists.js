// Write a function that returns an array that contains every other element of an array (even index positions)

// Algo:
  // Helper method to determine if a number is false or even

  function isEven(number) {
    return number % 2 == 0
  }

  function oddities(array) {
    let result = []
    for(let index = 0; index <= array.length - 1; index += 1) {
      if (isEven(index)) {
        result.push(array[index])
      }
    }
    return result
  }

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []