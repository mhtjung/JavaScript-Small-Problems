// Write a function that returns a new array composed of all values from the first array argument
// and second array or value argument.
  // The first argument will always be an array.
  // The second argument can be either an array or a value.
    // Need to validate
  // The elements in the new array should be in the same order as they appear in the arguments.
  // The function should copy any object references from the arguments into the new array
      // If you make a change to a reference object from one of the arguemtns after calling concat, those
      // changes should show up in the output array as well.
  // The function should copy the values of primitivse.`

function concat(array1, secondArg) {
  let arrayCopy = []
  for (let i = 0; i < array1.length; i++ ) {
    arrayCopy[i] = array1[i]
  }
  if (Array.isArray(secondArg)) {
    for (let i = 0; i < secondArg.length; i++) {
      arrayCopy.push(secondArg[i])
    }
  } else {
    let newIndex = array1.length;
    arrayCopy[newIndex] = secondArg
  }
  console.log(arrayCopy)
}

concat([1, 2, 3], [4, 5, 6]);          // [1, 2, 3, 4, 5, 6]
concat([1, 2], 3);                     // [1, 2, 3]
concat([2, 3], ['two', 'three']);      // [2, 3, "two", "three"]
concat([2, 3], 'four');                // [2, 3, "four"]

const obj = { a: 2, b: 3 };
const newArray = concat([2, 3], obj);
console.log(newArray);                              // [2, 3, { a: 2, b: 3 }]
obj.a = 'two';
console.log(newArray);                              // [2, 3, { a: "two", b: 3 }]

  