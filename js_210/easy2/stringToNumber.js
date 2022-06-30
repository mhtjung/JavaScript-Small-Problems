// Write a function that takes a string of digits and returns the appropriate number as an integer.
  // You may not use parseInt() or Number()

  function stringToInteger(string) {
    const DIGITS = {
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9
    };

    let array = string.split('').map(char => DIGITS[char]);
    let value = 0;
    array.forEach(digit => (value = (10 * value) + digit));
    return value
  }

  function stringToSignedInteger(string) {
    let first_char = string.split('')[0]
    let result
    if (first_char == '-') {
      result = stringToInteger(string.slice(1))
      return 0 - result
    } else if (first_char == '+') {
      return stringToInteger(string.slice(1))
    } else {
      return stringToInteger(string)
    }
  }

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true