function letterPercentages(string) {
  let arr = string.split('')
  let lowerCase = arr.filter(character => (/[a-z]/g.test(character)));
  let upperCase = arr.filter(character => (/[A-Z]/g.test(character)));
  let neither = string.length - lowerCase.length - upperCase.length
  let lowerCasePercentage = (lowerCase.length/string.length * 100).toFixed(2)
  let upperCasePercentage = (upperCase.length/string.length * 100).toFixed(2)
  let neitherPercentage = (neither/string.length * 100).toFixed(2)
  
  let resultString = `{ lowercase: ${lowerCasePercentage}, uppercase: ${upperCasePercentage}, neither: ${neitherPercentage}}`
  console.log(resultString)
}

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }