// Create a function newStack, that, when called, returns a stack object with three methods: push, pop, and printStack
const p = require('./p.js')

function newStack() {
  const stack = []
  return {
    push: function(item) { stack.push(item)},
    pop: function() { return stack.pop() },
    printStack: function() {
      stack.slice().reverse().forEach(element => p(element));
    },
  }
}

const myStack = new newStack

myStack.push(1)
myStack.push(2)
myStack.push(3)
// myStack.pop();
myStack.printStack();