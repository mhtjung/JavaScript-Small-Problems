// Write a function that takes an array of strings and returns an array of the same string values, but with all vowels removed.
function removeVowels(strings) {
  let result = strings.map(string => string.replaceAll(/[aeiouAEIOU]/g, ''));
  console.log(result);
  return result;
}

removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]