// bind is a method on all function objects that allows us to hard-bind a function
// to a particular object. The way this works is that you pass a context object to the bind method
// and it returns a new function that is essentially the same function but hard-bound to the
// context object supplied.

// Create a function myBind, that accepts two arguments: the function to bind, the context object,
// and returns a new function that's hard bound to the passed in context object.

function myBind(fn, context, ...partialArgs) {
  return function(...args) {
    const fullArgs = partialArgs.concat(args)
    return fn.apply(context, fullArgs)
  }
}