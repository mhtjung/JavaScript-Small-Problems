/*
Starting with body, check if there any children.
  For each of the children, call the function if there are any children.


Algo Test:
  Check if the parent element has children.
    If it has children, set the value of 'children' array to its children.
    Otherwise set the child array to an empty array
  If the parents have children, call recursively?

*/

function nodesToArr(node = document.body) {
  let children = [];
  
  if (node.hasChildNodes()) {
    children = Array.from(node.children).map(node => nodesToArr(node));
  }
  
  return [node.nodeName, children]
}
