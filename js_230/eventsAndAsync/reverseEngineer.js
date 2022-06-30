/*
Without changing the behavior of the following code, remove the call to event.StopPropagation and refactor the result;
*/

document.querySelector('html').addEventListener('click', (event) => {
  let container = document.querySelector('#container');

  if (!container.contains(event.target)) {
    container.style = 'display: none';
  }
});

