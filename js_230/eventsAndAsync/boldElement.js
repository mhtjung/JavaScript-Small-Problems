/* Implement a function that makes an element bold and allows the user of the function to optionally do something else with it. 

*/

// function makeBold(element) {
//   element.style.fontWeight = 'bold';

//   if (arguments.length > 1) {
//     let functions = Array.from(arguments).slice(1);
//     functions.forEach(func => {
//       if (typeof func === 'function') func(element)
//     })
//   }
// }

function makeBold(element) {
  element.style.fontWeight = 'bold';
  let myEvent = new CustomEvent('bolded');
  element.dispatchEvent(myEvent);
}