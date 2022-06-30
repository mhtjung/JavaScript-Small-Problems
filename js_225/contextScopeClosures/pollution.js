// Can you think of a way to refactor this code so we don't have any other variables in the global scope
// besides `greeter`

// const name = 'Naveed';
// const greeting = 'Hello';

// const greeter = {
//   message: `${greeting} ${name}!`,
//   sayGreetings() {
//     console.log(this.message);
//   }
// };

function makeGreeter(name, greeting) {
  return {
    message: `${greeting} ${name}!`,
    sayGreetings() {
      console.log(this.message);
    }
  }
}

const greeter = makeGreeter('Naveed', 'Hello')
greeter.sayGreetings()
