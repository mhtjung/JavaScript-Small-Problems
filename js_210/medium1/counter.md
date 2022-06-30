1. "The total value is 15"
  Even though the function defintion is hoisted, the variable taken by the function name is reassigned to an integer (5)
2. "The total value is NaN"
  The function definition is hoisted, as are the variable declarations (except for counter, which is ignored as a duplicate, since 
  the identifier was taken by the function definition. The call to console.log occurs before assignment of the variables; however,
  thus resulting in the "NaN" answer as we try to multiply a function with an undefined variable.
3. "The total value is 15"
  This becomes the same as question 1.
4. "Identifier "counter" already taken.