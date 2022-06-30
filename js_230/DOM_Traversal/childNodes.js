function childNodes(nodeId) {
  let node = document.getElementById(nodeId);
  let direct = node.childNodes.length;
  let indirect = 0;

  function walk(node) {
    indirect++;
    for (let i = 0; i < node.childNodes.length; i++) {
      walk(node.childNodes[i])
    };
  }

  node.childNodes.forEach(child => walk(child));

  return [direct, indirect - direct];
}