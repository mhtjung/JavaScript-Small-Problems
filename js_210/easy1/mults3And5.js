// Write a function that computes the sum of all numbers between 1 and some other number, inclusive, that are 
// multiples of 3 or 5.


function validNumber(number) {
  if (number % 3 === 0 || number % 5 === 0) {
    return true;
  } 
  return false
}

function multisum(number) {
  let result = 0

  for (let i = 1; i <= number; i += 1) {
    if (validNumber(i)) {
      result += i
    }
  }
  return result
}

console.log(multisum(3));
console.log(multisum(5));
console.log(multisum(10));
console.log(multisum(1000));
