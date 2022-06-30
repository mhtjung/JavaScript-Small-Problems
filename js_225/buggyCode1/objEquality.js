// Write a function objectsEqual() that accepts two object arguments and returns true or false
// depending on whether the objects have the same key/value pairs.

// Check the key lengths - if they're not equal, return false

// If they're true, iterate through the keys, comparing the values for each key
  // If true, the move to the next one
  // If false, return false


function objectsEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }

  return (keysMatch(obj1, obj2) && keysMatch(obj1, obj2))
}

function keysMatch(obj1, obj2) {
  let akeys = Object.getOwnPropertyNames(obj1)
  let bkeys = Object.getOwnPropertyNames(obj2)
  if (akeys.length !== bkeys.length) {
    return false
  }

  return akeys.every((key, index) => key === bkeys[index])
}

function valuesMatch(obj1, obj2) {
  let akeys = Object.getOwnPropertyNames(obj1)
  return akeys.every(key => obj1[key] === obj2[key])
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false