/*
Write a function that takes two element ids as arguments and swaps the positions of the elements represented by the ids

The function returnst rue for valid swaps and undefined for invalid.

You can assume that nodes will have a value for the id attribute and two arguments will always be provided.

Algorithgm:

First, locate each element node by id.
  If either of the nodes is undefined, exit and return undefined.
  If one of the nodes is a child of the other, exit and return undefined.

*/



function nodeSwap(id1, id2) {
  if (!validSwap(id1, id2)) {
    return undefined;
  }
  let node1 = document.getElementById(id1);
  let node2 = document.getElementById(id2);
  let node1Parent = node1.parentNode;
  let node1sibling = node1.nextSibling === node2 ? node1 : node1.nextSibling;
  node2.parentNode.insertBefore(node1, node2);
  node1Parent.insertBefore(node2, node1sibling);
  return true;
}

function validSwap(id1, id2) {
  let node1 = document.getElementById(id1);
  let node2 = document.getElementById(id2);

  if ((!node1 || !node2) || node1.contains(node2) || node2.contains(node1)) {
    return false;
  }

  return true;
}