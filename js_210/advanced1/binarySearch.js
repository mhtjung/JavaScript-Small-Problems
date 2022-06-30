// Implement a binarySearch function that takes an aray and a search item as arguments, and returns
// the index of the search item if found, or -1 otherwise. You may assume that the array argument will always be sorted.


// Algorithm
  // Use recursion?
  // Slice middle object, with ""


function binarySearch(array, searchTerm) {
  let highIndex = array.length - 1
  let lowIndex = 0

  while (lowIndex <= highIndex) {
    let mid = lowIndex + Math.floor((highIndex - lowIndex) / 2);
    if (array[mid] === searchTerm) {
      console.log(mid);
      return mid;
    } else if (array[mid] < searchTerm) {
      lowIndex = mid + 1
    } else {
      highIndex = mid - 1
    }
  }
  console.log(-1)
  return - 1
}

const yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
binarySearch(yellowPages, 'Pizzeria');                   // 7
binarySearch(yellowPages, 'Apple Store');                // 0

binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77);    // -1
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89);    // 7
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5);     // 1

binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter');  // -1
binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler');  // 6