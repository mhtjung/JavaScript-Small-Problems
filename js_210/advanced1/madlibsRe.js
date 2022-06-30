// Write a program that takes a text template as input
  // plugs in a selection of randomized 
    // nouns, verbs, ajectives, adverbs into that text and returns it.
  // You can build your lists of ^ words directly into your program.
  // Your program should read this text and for each line, place random words of the appropriate types into the text and return itself.


// Algorithm
  // Use object to store words
    // key -> object --> two arrays, the first is the words, the second is the used word.
    // Use random integers to select from the arrays

  // The function should detect words with the !! as a keyword, and use the sanitized version to select the relevant arrays.

  // The templates should be input as an array of strings. For each string, replace the words as needed.
const MADWORDS = {
  adverb: ['easily', 'lazily', 'noisily', 'excitedly',],
  adjective: ['quick', 'lazy', 'sleepy', 'noisy',],
  verb: ['jumps', 'lifts', 'bites', 'licks',],
  noun: ['fox', 'dog', 'head', 'leg',],
}

function madlibs(template) {
  let result = []
  for (let i = 0; i < template.length; i++) {
    let newSentence = replaceWords(template[i])
    result.push(newSentence)
  }
  result.forEach(sentence => console.log(sentence.join(' ')));
  return result

  function replaceWords(string) {
    let words = string.split(' ');
    let result = [];
    for (let i = 0; i < words.length; i++) {
      if (words[i].startsWith('!!')) {
        let keyWord = words[i].slice(2);
        let newWord = generateLib(keyWord)
        result.push(`${newWord}`);
      } else {
        result.push(`${words[i]}`);
      }
    }
    return result
  }
  
  function generateLib(keyword) {
    keyword = keyword.replaceAll(/\W|_/g,'')
    let index = Math.floor(Math.random() * 4)// Need to make this dynamic
    let word = MADWORDS[keyword][index]
    return word
  }
}

let template = [
  "The !!adjective brown !!noun !!adverb !!verb the !!adjective yellow !!noun.",
]



madlibs(template);
