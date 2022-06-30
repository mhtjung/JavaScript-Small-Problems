// Write a function that takes a grocery list in a two-dimensional array
// and returns a one-dimensional array.

// Each element in the grocery list contains a fruit name and a number that represents the desired quantity of that fruit.
// The output array is such that each fruit name appears the number of times equal to its desired quantity.

// Algorithm
// Create an object using Object.fromEntries
  // Iterate over the keys of the object
    // Create a helper function that takes a string and a number and creates an array of that many strings.
    // Append this helper functions's returned array to a results array
  // Return new array

function buyFruit(array) {
  let result = [] 
  array.forEach(arr => {
    let temp = repeater(arr[0], arr[1])
    result = result.concat(temp)
  })
  return result
}

function repeater(string, number) {
  let result = []
  for (let i = 0; i < number; i++) {
    result.push(string)
  }
  return result
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]