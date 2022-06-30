function isUppercase(string) {
  const regex = /[a-z]/
  console.log(!regex.test(string));
}

isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true