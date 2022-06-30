/*
Implement a function, `sliceTree`, that is 'similar' to the `Array.prototype.slice` method, but this time for a DOM tree.

The `sliceTree` function takes two arguments:
  1. The start index, which is the parent node's `id` attribute
  2. The end index, which is the innermost child node's `id` attribute.

The function returns an array of `tagNames`.

Notes:
  1. It's similar to slice but different in the sence that slice isn't inclusive on the right hand side.
  2. The end index doesn't have to be the id of the "innermost" child node as some of the examples suggest.
  3. Only consider element nodes.
  4. Only elemnets that have `body` as an ancestor (parent, grandparent, etc) are sliceable.
  5. If the `id` attribute of the start or end index is not in the DOM, return `undefined`
    Helper method?
  6. If the slice is not feasible -- there's no path connecting the element at the starting index to the ending index, return undefined.

Algorithm:

Start with first element - append it's tag name to result
  Find child node that is a 'ancestor' to the end node
  Step into that node
  Iterate until end node id matches

*/



function sliceTree(start, end) {
  if (!document.getElementById(start).contains(document.getElementById(end))) {
    return undefined;
  };

  let result = [];
  var startNode = document.getElementById(start);
  let endNode = document.getElementById(end);
  result.push(startNode.tagName);
  let nextNode = findPath(startNode, endNode);

  while ( nextNode !== endNode ) {
    result.push(nextNode.tagName);
    nextNode = findPath(nextNode, endNode);
  }

  result.push(nextNode.tagName);

  return result;
};

function findPath(parent, targetNode) {
  let children = parent.children;
  let validPath = [...children].filter( node => node.contains(targetNode));
  return validPath[0]
};