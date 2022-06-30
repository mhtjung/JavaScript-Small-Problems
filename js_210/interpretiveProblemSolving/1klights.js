// Write a program that takes on argument, the total number of switches, and returns an array of the lights that are on after
// n repetitions.

// Algorithm
  // Given integer n
    // We have a number of switches from 1 to n
  // For N repetitions
    // The first iteration, every nth switch is turned on
    // The second iteration, every 2nth switch is toggled
    // The third iteration, every 3nth switch is toggled\
    // ETC
  // Return the number of the lights that are ON

// Given integer n
  // Create an array of booleans falses with a length of n.
  // Adjust the inner interation counter based on the outer iteration.

function lightsOn(integer) {
  if (typeof integer != 'number' || Number.isNaN(integer)) {
    return []
  }
  let switches = createSwitches(integer)
  for (let iOuter = 1; iOuter < integer + 1; iOuter++) {
    for (let iInner = iOuter; iInner < switches.length + 1; iInner += iOuter) {
      switches[iInner - 1] = !switches[iInner - 1]
    }
  }
  let indices = []
  switches.forEach((lightSwitch, index) => {
    if (lightSwitch) {
      indices.push(index + 1)
    }
  });

  return indices
}

function createSwitches(n) {
  let result = []
  for (let i = 0; i < n; i++) {
    result.push(false)
  }
  return result
}

console.log(createSwitches(100).length)

console.log(lightsOn(5));
console.log(lightsOn(100));
console.log(lightsOn(0));
console.log(lightsOn(-1));
console.log(lightsOn('hello there'));
console.log(lightsOn(NaN));
console.log(lightsOn(undefined));
console.log(lightsOn(null));
