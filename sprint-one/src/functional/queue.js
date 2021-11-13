var Queue = function() {
  var someInstance = [];
  var currentSize = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    someInstance = [value].concat(someInstance);
    currentSize++;
  };

  someInstance.dequeue = function() {
    currentSize--;
    return(someInstance.splice(-1, 1)[0])
  };

  someInstance.size = function() {
    if (currentSize >= 0) {
      return currentSize;
    }

    else {
      return 0;
    }
  };

  return someInstance;
};
