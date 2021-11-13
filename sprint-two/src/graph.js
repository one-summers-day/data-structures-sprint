

// Instantiate a new graph
var Graph = function() {
  this.nodeList = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) {

  let newNode = {
    value: null,
    connectedNodes: []
  };

  newNode.value = value;
  this.nodeList.push(newNode);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(target) {
  for (let i = 0; i < this.nodeList.length; i++) {
    if (this.nodeList[i].value === target) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(target) {
  // iterate through node list and remove edges
  for (let i = 0; i < this.nodeList.length; i++) {
    if (this.nodeList[i].connectedNodes.includes(target)) {
      this.removeEdge(this.nodeList[i].value, target);
    }
    if (this.nodeList[i].value === target) {
      this.nodeList.splice(i, 1);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // find where from and to nodes are
  let fromNodeLocation;
  let toNodeLocation;

  for (let i = 0; i < this.nodeList.length; i++) {
    if (this.nodeList[i].value === fromNode) {
      fromNodeLocation = i;
    }
    if (this.nodeList[i].value === toNode) {
      toNodeLocation = i;
    }
  }

  if (this.nodeList[fromNodeLocation].connectedNodes.includes(toNode)
    && this.nodeList[toNodeLocation].connectedNodes.includes(fromNode)
  ) {
    return true;
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // find where from and to nodes are
  let fromNodeLocation;
  let toNodeLocation;

  for (let i = 0; i < this.nodeList.length; i++) {
    if (this.nodeList[i].value === fromNode) {
      fromNodeLocation = i;
    }
    if (this.nodeList[i].value === toNode) {
      toNodeLocation = i;
    }
  }

  console.log(fromNodeLocation);
  console.log(toNodeLocation);

  // add edge to both nodes
  this.nodeList[fromNodeLocation].connectedNodes.push(toNode);
  this.nodeList[toNodeLocation].connectedNodes.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // find where from and to nodes are
  let fromNodeLocation;
  let toNodeLocation;

  for (let i = 0; i < this.nodeList.length; i++) {
    if (this.nodeList[i].value === fromNode) {
      fromNodeLocation = i;
    }
    if (this.nodeList[i].value === toNode) {
      toNodeLocation = i;
    }
  }

  let toNodeAddress = this.nodeList[fromNodeLocation].connectedNodes.indexOf(toNode);
  let fromNodeAddress = this.nodeList[toNodeLocation].connectedNodes.indexOf(fromNode);

  // delete edge to both nodes
  this.nodeList[fromNodeLocation].connectedNodes.splice(toNodeAddress, 1);
  this.nodeList[toNodeLocation].connectedNodes.push(fromNodeAddress, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // iterate through node list
  for (let i = 0; i < this.nodeList.length; i++) {
    cb(this.nodeList[i].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?

addNode: O(1)
contains: O(N)
removeNode: O(N)
hasEdge: O(N)
addEdge: O(N)
removeEdge: O(N)
forEachNode: O(N)
 */

var testGraph = new Graph();
