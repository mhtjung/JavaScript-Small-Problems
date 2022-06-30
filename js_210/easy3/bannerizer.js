// Write a functino that will take a short line of text and write, and write it to the console log within a box.

function printHorizontalBorder(textLength) {
  let span = textLength + 2;
  let string = "+" + `${'-'.repeat(span)}` + "+";
  console.log(string);
}

function printHorizontalSpacer(textLength) {
  let span = textLength + 2;
  let string = "|" + `${' '.repeat(span)}` + "|";
  console.log(string);
}

function printFormattedText(text) {
  let string = "| " + `${text}` + " |";
  console.log(string);
}

function logInBox(text) {
  let textLength = text.length;
  printHorizontalBorder(textLength);
  printHorizontalSpacer(textLength);
  printFormattedText(text);
  printHorizontalSpacer(textLength);
  printHorizontalBorder(textLength);
}

logInBox('To boldly go where no one has gone before.')