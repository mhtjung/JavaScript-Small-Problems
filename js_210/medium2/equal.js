// Equality comparison for objects by default only returns true when both objects are the same.
  // We can correct this by instead comparing the object's values.
  // Alternatively, if we can set otherPerson equal to the object referenced by person.

  const person = { name: 'Victor' };
  const otherPerson = { name: 'Victor' };
  
  console.log(person.name === otherPerson.name);    // false -- expected: true