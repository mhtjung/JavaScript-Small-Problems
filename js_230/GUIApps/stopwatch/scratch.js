function myFunc() {
  let count = 0;
  let interval = setInterval(() => {
    count += 1
    console.log(count);
    if (count == 100) { count = 0}
  }, 10)
}

