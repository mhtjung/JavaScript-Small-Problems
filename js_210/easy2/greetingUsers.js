// Write a program that will ask for user's name. The program will then greet the user.
// If the user writes "name!" then the computer yells back to the user.

let rlSync = require('readline-sync')
let name = rlSync.question("Hello! What is your name?\n")
if (name.endsWith('!')) {
  console.log(`HELLO ${name.slice(0,-1).toUpperCase()}! WHY ARE WE SCREAMING?`)
} else {
  console.log(`Hello ${name}.`)
}