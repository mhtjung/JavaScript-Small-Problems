/*
Implement a function that tracks events on a web page by wrapping a callback function in a function that adds each event to a tracker
object before invoking the callback.

In other words, your function should take a callback function as an argument and return a new function that:

1. Records the event, if the specific event hasn't been recorded before.
2. Executes the original callback function.


*/
const tracker = (() => {
  const events = [];
  return {
    list() {
      return events.slice(0);
    },
    elements() {
      return this.list().map(event => event.target)
    },
    clear() {
      events.length = 0;
      return events.length;
    },
    add(event) {
      events.push(event);
    }
  }
})();

function track(callback) {

  return function(event) {
    if (!tracker.list().includes(event)) {
      tracker.add(event);
    }

    callback(event);
  };
}

document.addEventListener("DOMContentLoaded", () => {
  const divRed = document.body.querySelector('#red')
  const divBlue = document.body.querySelector('#blue')
  const divGreen = document.body.querySelector('#green')
  const divOrange = document.body.querySelector('#orange')

  divRed.addEventListener('click', track(event => {
    document.body.style.background = 'red';
  }));

  divBlue.addEventListener('click', track(event => {
    event.stopPropagation();
    document.body.style.background = 'blue';
  }));

  divOrange.addEventListener('click', track(event => {
    document.body.style.background = 'orange';
  }));

  divGreen.addEventListener('click', track(event => {
    document.body.style.background = 'green';
  }));

})