var Queue = function() {
  var someInstance = {
    currentSize : 0,
    tracker : []
  };

  someInstance.enqueue = queueMethods.enqueue;
  someInstance.dequeue = queueMethods.dequeue;
  someInstance.size = queueMethods.size;

  extend(someInstance, queueMethods);

  return someInstance;
};

var extend = function(obj, methods) {
  for (var key in methods) {
    obj[key] = methods[key]
  }
}

var queueMethods = {
  enqueue : function(value) {
    this.tracker = [value].concat(this.tracker);
    this.currentSize++;
  },

  dequeue : function() {
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
}
