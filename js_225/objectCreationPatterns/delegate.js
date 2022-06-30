// WRite a delegate function that can be used to delegate the behavior of a method
// or function to another object's method.

// delegate() takes a minimum of two arguments, the object, and the name of the method on the object

// the remainin oargs, if any, are passed, as args, to the object's method that it delegates to.


function delegate(object, method, ...args) {
  return function () {
    object[method](args)
  }
}

const foo = {
  name: 'test',
  bar(greeting) {
    console.log(`${greeting} ${this.name}`);
  },
};

const baz = {
  qux: delegate(foo, 'bar', 'hello'),
};

baz.qux()

foo.bar = () => { console.log('changed'); };

baz.qux();          // logs 'changed'