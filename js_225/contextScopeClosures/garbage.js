// No, because the `array` assigned to variable `array` is still in scope thanks to closure.
// On line 10, we invoke the `MakeArrays()` function, which initializes an empty array, and returns
// an anonymous function which appends an empty string to said array, and then returns that array.
// We save this anonymous function by assigning it to the `pushIt` constant. When we then invoke `pushIt()`,
// the array initialized during the invocation of `makeArrays()` is still available to the method.