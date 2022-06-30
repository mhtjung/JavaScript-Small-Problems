const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(number) {
  let result = '';

  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);

    result = DIGITS[remainder] + result;
  } while (number > 0);

  return result;
}

function signedIntegerToString(number) {
  // If it's a negative number, subtract it from 0, then pass to integerToString
  let sign = Math.sign(number)
  if (sign == -1) {
    let positive_number = 0 - number
    return '-' + integerToString(positive_number)
  } else if (integerToString(number) == 0) {
    return '0'
  } else {
    return '+' + integerToString(number)
  }
}
console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");