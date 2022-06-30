// Write a function that takes a string as an argument and returns that string
// with the first character of every word capitalized and all subsequent characters in lowercase.

// You may assume that a word is any sequence of non-whitespace chars.

function wordCap(string) {
  let words = string.split(' ').map(word => word.toLowerCase()).map(word => word[0].toUpperCase() + word.slice(1))
  return words.join(' ');
}

wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'