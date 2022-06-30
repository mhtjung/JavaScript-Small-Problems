// Modify the function from the previous exercise so that it ignores non-alphabetic chars
// when determining whether a letter should be upper or lower case.

function staggeredCase(string) {
  let arr = string.split('')
  let result = ''
  let adjustedIndex = 0
  for (let i = 0; i < arr.length; i++) {
    if (isAlphabetic(arr[i])) {
      result += staggeredSwap(arr[i], adjustedIndex)
      adjustedIndex += 1
    } else {
      result += arr[i] 
    }
  }
  return result;
}

function isAlphabetic(char) {
  return /[a-zA-Z]/g.test(char)
}


function staggeredSwap(char, index) {
  if (index % 2 === 0) {
    return char.toUpperCase()
  } else {
    return char.toLowerCase()
  }
}

staggeredCase('I Love Launch School!');        // "I lOvE lAuNcH sChOoL!"
staggeredCase('ALL CAPS');                     // "AlL cApS"
staggeredCase('ignore 77 the 444 numbers');    // "IgNoRe 77 ThE 444 nUmBeRs"