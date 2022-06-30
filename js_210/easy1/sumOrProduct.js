// Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to 
// determine the sum of the product of all the numbers between 1 and the entered integer, inclusive.

let rlSync = require('readline-sync')
let number = Number(rlSync.question('Please enter an integer greater than 0\n'))
let answer = rlSync.question('Enter "s" to computer the sum, or "p" to compute the product.')
if (answer === 's') {
  let sum = computeSum(number)
  console.log(`The sum of the integers between 1 and ${number} is ${sum}`)
} else {
  let product = computeProduct(number)
  console.log(`The product of the integers between 1 and ${number} is ${product}`)
}

function computeSum(number) {
  let result = 0
  while (number > 0) {
    result += number
    number -= 1
  }
  return result
}

function computeProduct(number) {
  let product = 1
  while (number > 0) {
    product *= number
    number -= 1
  }
  return product
}