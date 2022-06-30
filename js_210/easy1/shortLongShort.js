function shortLongShort(text1, text2) {
  if (text1.length > text2.length) {
    console.log(combine(text2, text1))
  } else {
    console.log(combine(text1, text2))
  }
}

function combine(shortText, longText) {
  return shortText + longText + shortText
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"