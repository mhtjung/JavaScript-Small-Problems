// Write a function that takes a string as an argument and returns that string
// with every lowercase letter changed to uppercase and every uppercase letter changed to lowercase.
// Leave all other characters unchanged.


function swapCase(string) {
  return string.split('').map(caseSwap).join('');
}

function caseSwap(character) {
  if (/[a-z]/.test(character)) {
    return character.toUpperCase()
  } else if (/[A-Z]/.test(character)) {
    return character.toLowerCase()
  } else {
    return character
  }
}

swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"