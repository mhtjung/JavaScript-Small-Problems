/* Write a `randomizer` function that accepts n callbacks and 
  calls each callback at some random point in time between now and 2 * n second
  For instance, if the caller provides 5 callbacks, the function should run them all sometime within 10 seconds.
  
While running, `randomizer` should log the elapsed time every second: 1, 2, 3, ... 2 * n  

Use setTimeout? Use interval?
Order doesn't matter

Get n number of random intervals
For each of the callbacks, assign a setTimeout


*/
function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

function randomizer(...args) {
  let randomTimeout = () => Math.floor(Math.random() * (callbacks.length * 2)) * 1000

  let seconds = 0
  let intervalId = setInterval(() => {
    console.log(++seconds)
    if (seconds >= callbacks.length * 2) clearInterval(intervalId);
  }, 1000);

  let callbacks = Array.from(args);

  callbacks.forEach(callback => {
    setTimeout(callback, randomTimeout())
  });

}

randomizer(callback1, callback2, callback3)