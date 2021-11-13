var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance['currentSize'] = 0;
  someInstance['tracker'] = [];

  return someInstance;
};

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
};


