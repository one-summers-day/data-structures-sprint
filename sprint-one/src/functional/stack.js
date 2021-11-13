var Stack = function() {
  var someInstance = [];
  var currentSize = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    someInstance = someInstance.concat(value);
    currentSize++;
  };

  someInstance.pop = function() {
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
