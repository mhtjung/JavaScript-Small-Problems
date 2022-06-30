const FeetToSquareMeters = 10.7639
let rlSync = require('readline-sync');
let length = rlSync.question('Enter the length of the room in meters:\n');
let width = rlSync.question('Enter the width of the room in meters\n');
let areaInMeters = length * width
let areaInFeet = areaInMeters * FeetToSquareMeters
console.log(`The area of the room is ${areaInMeters} square meters (${areaInFeet} square feet)`)
