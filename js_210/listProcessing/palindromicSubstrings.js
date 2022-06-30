
function palindromes(string) {
  let subs = substrings(string);
  let result = subs.filter(isPalindrome);
  console.log(result);
}


function isPalindrome(string) {
  if (string.length <= 1) {
    return false;
  }
  let front;
  let back;
  if (string.length % 2 === 0) {
    front = string.slice(0, string.length/2);
    back = string.slice(string.length/2);
  } else {
    front = string.slice(0, (string.length- 1) / 2);
    back = string.slice((string.length + 1) / 2);
  }
  let reversedBack = back.split('').reverse().join('');
  return front === reversedBack;
}

function substrings(string) {
  function leadingSubstrings(string) {
    let result = [];
  
    for (let endIndex = 1; endIndex <= string.length; endIndex++ ) {
      let substring = string.slice(0, endIndex);
      result.push(substring);
    }
  
    return result;
  }
  let result = []
  for (let index = 0; index < string.length; index++ ) {
    let copy = string.slice(index);
    let subs = leadingSubstrings(copy);
    result = result.concat(subs);
  }
  return result;
}
palindromes('abcd');       // []

palindromes('madam');      // [ "madam", "ada" ]
palindromes('hello-madam-did-madam-goodbye');
palindromes('knitting cassettes');
