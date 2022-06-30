// Write a function that takes two arguments, an inventory item id and a list of transactions.
  // The function should only return true if the sum of the quantiity value of the item's transactions is 0


const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
{ id: 105, movement: 'in',  quantity: 10 },
{ id: 102, movement: 'out', quantity: 17 },
{ id: 101, movement: 'in',  quantity: 12 },
{ id: 103, movement: 'out', quantity: 15 },
{ id: 102, movement: 'out', quantity: 15 },
{ id: 105, movement: 'in',  quantity: 25 },
{ id: 101, movement: 'out', quantity: 18 },
{ id: 102, movement: 'in',  quantity: 22 },
{ id: 103, movement: 'out', quantity: 15 }, ];

function isItemAvailable(itemId, transactions) {
  if (inventoryQuantity(itemId, transactions) > 0) {
    return true;
  }
  return false
}

function inventoryQuantity(itemId, transactions) {
  transactions = transactionsFor(itemId, transactions)
  let adjusted = transactions.map( obj => {
    if (obj.movement === 'in') {
      return obj.quantity;
    } else {
      return 0 - obj.quantity;
    }
  });
  return adjusted.reduce( (x, y) => x + y )
}

function transactionsFor(itemId, transactions) {
  return transactions.filter( obj => obj.id === itemId);
}

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // false
