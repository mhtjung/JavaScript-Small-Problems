// Write a function that implements the Casesar cipher
  // The function should take a string and a "shift" value.
  // Return a case sensitive string "shifted" appropriately.

// Algorithm
  // Represent the alphabet (uppercase) as an array
    // Indices represent the alphabet "position"
  
  // Initialize a results string
  // Iterate over the characters of the input string
    // find it's index within the alphabet string
    // increment this index by the input integer
      // If the value is over 25, subtract it by 25 until it's less than or equal to 25
      // Use this index to find the appropriate "shifted" character.
      // Check if the original character was uppercase
        // If it was, append the new character uppercase
        // Else append it lowercase
    // Return the result string


function caesarEncrypt(string, shift) {
  if (shift === 0) {console.log(string); return string}
  const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
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


// simple shift
caesarEncrypt('A', 0);       // "A"
caesarEncrypt('A', 3);       // "D"

// wrap around
caesarEncrypt('y', 5);       // "d"
caesarEncrypt('a', 47);      // "v"

// all letters
caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25);
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5);
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2);
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"