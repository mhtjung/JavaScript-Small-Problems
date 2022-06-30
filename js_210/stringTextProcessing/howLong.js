// Write a function that takes a string as an argument and returns an array that contains
// Every word from the string, with each word followed by a space and the word's length.

// If the argument is an empty string or if no argument is passed, the function should return an empty string.

function wordLengths(string) {
  if (string === '' || arguments.length === 0) {
    return []
  }

  let arr = string.split(' ')
  return arr.map( word => `${word} ${word.length}`);
}

wordLengths('cow sheep chicken');
// ["cow 3", "sheep 5", "chicken 7"]

wordLengths('baseball hot dogs and apple pie');
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

wordLengths("It ain't easy, is it?");
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

wordLengths('Supercalifragilisticexpialidocious');
// ["Supercalifragilisticexpialidocious 34"]

wordLengths('');      // []
wordLengths();        // []