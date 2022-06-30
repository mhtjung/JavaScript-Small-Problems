// Write a function that implements the Vignere cipher
// The function should take a string and a "key"
  // The alphabetic indices of the "key" represent the sequential caesar shift.

// Algorithm
  // Generate indices using the alphabetic indices of each of the "key" characters
  // Iterate over the string
    // For each character
      // If the character is alphabetic, select the first available shift value from the indices array
        // Apply the relevant caesar shift, and append the new character to the new string.
        // Rotate the indices
      // If the character is not alphabetic, append it to the results string and continue. 



vignereCipher("Pineapples don't go on pizzas!", "meat")      
function vignereCipher(string, keyString) {
  const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let shiftValues = keyString.split('').map(element => ALPHABET.indexOf(element.toUpperCase()))
  let result = ''
  for (let i = 0; i < string.length; i++) {
    if (ALPHABET.indexOf(string[i].toUpperCase()) === -1) {
      result += string[i]
      continue;
    } else {
      let newChar = caesarEncrypt(string[i], shiftValues[0])
      result += newChar
      rotateArray(shiftValues);
    }
  }
  console.log(result);
  return result

  function rotateArray(array) {
    array.push(array.shift())
  }
  function caesarEncrypt(string, shift) {
    if (shift === 0) {return string}
    let result = ''
    for (let i = 0; i < string.length; i++) {
      let upperCase = string[i] === string[i].toUpperCase() ? true : false
      let originalIndex = ALPHABET.indexOf(string[i].toUpperCase())
      if (originalIndex === -1) {
        result += string[i]
        continue;
      }
      let newIndex = adjustIndex(originalIndex, shift);
      if (upperCase) {
        result += ALPHABET[newIndex]
      } else {
        result += ALPHABET[newIndex].toLowerCase()
      }
    }
    return result
  
    function adjustIndex(originalIndex, shift) {
      const ALPHABET_MAX_INDEX = 25
      let newIndex = originalIndex + shift
      while (newIndex > ALPHABET_MAX_INDEX) {
        newIndex -= ALPHABET_MAX_INDEX + 1
      }
      return newIndex;
    }
  }  
}

