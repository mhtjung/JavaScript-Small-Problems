/* 
Write a JS function that takes an element's id and returns the DOM tree of the element in a 
two-dimensional array.

The first subarray contains the element and it's siblings
The second contains the parent of the element and its sibling,
so on and so forth, all the way up to the grandest parent.

Assume that the grandest parent is the element with an ID of 1.


*/

function domTreeTracer(nodeId) {
  let currentElement = document.getElementById(nodeId);
  let parentElement = currentElement.parentElement;
  const DOMTree = []

  do {
    let siblings = parentElement.children;
    DOMTree.push(getTagNames(siblings));
    currentElement = parentElement;
    parentElement = currentElement.parentElement;
  } while (currentElement.nodeName !== 'BODY');
  
  return DOMTree;
};

function getTagNames(htmlCollection) {
  return [...htmlCollection].map(node => node.nodeName)
};