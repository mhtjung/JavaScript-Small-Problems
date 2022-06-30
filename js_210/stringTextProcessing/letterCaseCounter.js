// Write a function that takes a string and returns an object containing three properties:
  // The number of lowercase letters in the string
  // The number of uppercase letters in the string
  // The number of non-upper/lowercase letters in the string


function letterCaseCount(string) {
  let obj = {
    lowercase: (string.match(/[a-z]/g) || []).length,
    uppercase: (string.match(/[A-Z]/g) || []).length,
    neither: (string.match(/[^a-z]/gi) || []).length,
  }
  console.log(obj);
  return obj;
}

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }