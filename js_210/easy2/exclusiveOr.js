// Write a function named xor that takes two arguments and returns true
// if exactly ONE of its arguments is truthy.

function xor(arg1, arg2) {
  if ((arg1 && !arg2) || (!arg1 && arg2)) {
    return true
  }
  return false
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);