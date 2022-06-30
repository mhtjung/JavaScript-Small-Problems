/* Impelement a function that converts a nested array of nodeNames (see Nodes to Array for examples) to
nodes. Go over the sample code and the corresponding return values below as ag uide for what you will implement.

Notes: 
The problem lends itself well to recursion.
Perhaps the difficult part of the problem comes from determining a base case. A potential base case is that the node has no children.

Algorithm:

Check if the list of children is empty.
  If it's empty, create the outermost node.
  Else, call the function for it's children.

*/

// Nested array of nodes
const nodes = ["BODY",[["HEADER",[]],["MAIN",[]],["FOOTER",[]]]];

function arrayToNodes(nodes) {
  const parent = document.createElement(nodes[0]);
  const children = nodes[1];

  if (children.length === 0) {
    return parent;
  } else {
    for (let i = 0; i < children.length; i++) {
      parent.appendChild(arrayToNodes(children[i]));
    }
  }
  return parent;
}

arrayToNodes(nodes);