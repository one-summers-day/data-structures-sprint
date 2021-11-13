var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance['currentSize'] = 0;
  someInstance['tracker'] = [];

  return someInstance;
};

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


