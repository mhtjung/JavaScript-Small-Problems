function makeDoubler(caller) {
  function doubler(number) {
    console.log(`This function was called by ${caller}`);
    return number + number
  }

  return doubler
}

let doubler = makeDoubler('Victor');
doubler(5);