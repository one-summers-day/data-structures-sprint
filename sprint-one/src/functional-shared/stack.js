var Stack = function() {
  let someInstance = {
    currentSize : 0,
    tracker : []
  };

  someInstance.push = stackMethods.push;
  someInstance.pop = stackMethods.pop;
  someInstance.size = stackMethods.size;

  extend(someInstance, stackMethods)

  return someInstance;
};

var extend = function(obj, methods) {
  for (var key in methods) {
    obj[key] = methods[key]
  }
}

var stackMethods = {
  push : function(value) {
    this.tracker = this.tracker.concat(value);
    this.currentSize++;
  },

  pop : function() {
    this.currentSize--;
    return(this.tracker.splice(-1, 1)[0])
  },

  size : function() {
    if (this.currentSize >= 0) {
      return this.currentSize;
    }

    else {
      return 0;
    }
  }
};


