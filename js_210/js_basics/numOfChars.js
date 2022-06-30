function numOfChars() {
  let rlSync = require('readline-sync')
  let phrase = rlSync.question('Please enter a phrase: ')
  let string = `There are ${phrase.length} characters in "${phrase}"`
  console.log(string)
}

numOfChars()