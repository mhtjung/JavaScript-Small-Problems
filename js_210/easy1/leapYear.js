function isLeapYear(year) {
  if (year > 1752) {
    return isGregorianLeapYear(year);
  } else {
    return isJulianLeapYear(year);
  }
}

function isGregorianLeapYear(year) {
  if (divisibleByFour(year) && !divisibleByOneHundred(year)) {
    return true;
  } else if (divisibleByOneHundred(year) && divisibleByFourHundred(year)) {
    return true;
  } else {
    return false;
  }
}
function isJulianLeapYear(year) {
  return year % 4 === 0;
}

function divisibleByFour(number) {
  return number % 4 === 0;
}
function divisibleByFourHundred(number) {
  return divisibleByFour(number) && divisibleByOneHundred(number);
}
function divisibleByOneHundred(number) {
  return number % 100 === 0;
}

console.log(isLeapYear(400));
console.log(isLeapYear(2016));