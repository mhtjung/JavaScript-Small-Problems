function invoiceTotal(...args) {
  let total = 0;
  args.forEach(arg => total += arg);
  console.log(total);
  return total
}

invoiceTotal(20, 30, 40, 50);          // works as expected
invoiceTotal(20, 30, 40, 50, 40, 40);  // does not work; how can you make it work?