"use strict";
// Write a function that takes one argument, a positive integer, and returns the sum of its digits. 
// Do this without using for, while, or do...while loops - instead, use a series of method calls to perform the sum.

function sum(integer) {
  let string = String(integer);
  let arr = string.split('').map((string) => Number(string));
  let total = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
  console.log(total);
  return total
}

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45