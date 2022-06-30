let rlSync = require('readline-sync')
let bill = Number(rlSync.question('What is the bill?\n'))
let tipPercentage = Number(rlSync.question('What is the tip percentage?\n'))/100

let tip_amount = bill * tipPercentage
let new_total = bill + tip_amount

console.log(`The tip is $${tip_amount}`)
console.log(`The total is $${new_total}`)