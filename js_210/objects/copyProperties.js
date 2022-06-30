// Write a function named copyProperties that takes two Objects as arguments. The function should copy
// all properties from the first object to the second. The function should return the number of properties copied.

function copyProperties(object1, object2) {
  let counter = 0
  for (property in object1) {
    object2[property] = object1[property]
    counter++ 
  }
  return counter
}
let hal = {
  model: 9000,
  enabled: true,
};
let sal = {};
console.log(copyProperties(hal, sal));  // 2
console.log(sal);                       // { model: 9000, enabled: true }