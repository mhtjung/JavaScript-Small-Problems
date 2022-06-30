let rlSync = require('readline-sync');
let first_number = Number(rlSync.question("==> Enter the first number:\n"));
let second_number = Number(rlSync.question("==> Enter the second number:\n"));

display(`${first_number} + ${second_number} = ${first_number + second_number}`);
display(`${first_number} - ${second_number} = ${first_number - second_number}`);
display(`${first_number} * ${second_number} = ${first_number * second_number}`);
display(`${first_number} / ${second_number} = ${first_number / second_number}`);
display(`${first_number} % ${second_number} = ${first_number % second_number}`);
display(`${first_number} ** ${second_number} = ${first_number ** second_number}`);

function display(text) {
  console.log('==> ' + text)
}