// Write a function named objectHasProperty that takes two arguments: an object and a string.
// The function should return true if the Object contains a property with the name given by the String, false otherwise.

function objectHasProperty(object, propertyName) {
  let keys = Object.keys(object);
  return keys.indexOf(propertyName) !== -1;
}