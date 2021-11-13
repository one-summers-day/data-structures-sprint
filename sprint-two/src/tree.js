var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  // extend tree with treeMethods
  extend(newTree, treeMethods);
  return newTree;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  let newNode = Tree();
  newNode.value = value;
  this.children.push(newNode);
};

treeMethods.contains = function(target) {

  let isFound = false;
  let containsTarget = function(node) {
    // base case - current node's value is target
    if (node.value === target) {
      isFound = true;

    // recursive case
    } else {
      for (let i = 0; i < node.children.length; i++) {
        containsTarget(node.children[i]);
      }
    }
  }

  // call function on top-most node to kickof search
  containsTarget(this);
  return isFound;
};


/*
 * Complexity: What is the time complexity of the above functions?
addChild: O(1)
contains: O(N)
 */
