var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      return;
    }

    else{
      //list is not empty > head and tail are not null
      //append the new node at the tail's next property.
      this.tail.next = newNode;
      //update tail to newTail.
      this.tail = this.tail.next;
    }
  };

  list.removeHead = function() {
    //update the head to the newHead.
    let oldHead = this.head;
    this.head = this.head.next;
    //remove the head.
    return oldHead.value;
  };

  list.contains = function(target) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
      return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
addToTail: O(1)
removeHead: O(1)
contains: O(N)
 */
