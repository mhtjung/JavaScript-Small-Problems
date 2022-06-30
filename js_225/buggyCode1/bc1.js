function createGreeter(name) {
  return {
    name,
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',
    greet(timeOfDay) {
      let msg = '';
      switch (timeOfDay) {
        case 'morning':
          msg += `${this.morning} ${this.name}`;
          break;
        case 'afternoon':
          msg += `${this.afternoon} ${this.name}`;
          break;
        case 'evening':
          msg += `${evening} ${this.name}`;
          break;
      }

      console.log(msg);
    },
  };
}

const helloVictor = createGreeter('Victor');
helloVictor.name = 'Pete'
helloVictor.greet('morning');

// The problem with the original code is that on lines 11 through 17, in the case statement, the string literals being concatenated
// to `msg` use interpolation calling for local variables - if we want to reference the values stored in the object which contains
// the function, we must use the `this` keyword.

// We do not need the `this` keyword for the `name` variables used on the same lines, because, thanks to closure, it is still
// accessible after the createGreeter() function has been invoked. `name` is a local variable bound in scope by the function
// `createGreeter`; when we access name during string interpolation on lines 11 through 17, we are accessing the name argument
// that we passed into the constructor function, not the property on the returned object.

// We can demonstrate this by reassigning the "name" property on the helloVictor object - the output will still be the same,
// because we're actually referencing the argument to the `createGreeter()` function.