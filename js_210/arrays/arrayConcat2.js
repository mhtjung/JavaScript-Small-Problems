function concat(...args) {
  const newArray = [];

  for (let argIndex = 0; argIndex < args.length; argIndex += 1) {
    let currentArg = args[argIndex];
    if (Array.isArray(currentArg)) {
      let arraySize = currentArg.length;
      for (let arrayIndex = 0; arrayIndex < arraySize; arrayIndex += 1) {
        newArray[newArray.length] = currentArg[arrayIndex];
      }
    } else {
      newArray[newArray.length] = currentArg;
    }
  }

  return newArray;
}