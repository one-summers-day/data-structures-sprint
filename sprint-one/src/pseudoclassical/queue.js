var Queue = function(currentSize = 0, tracker = []) {
  this.currentSize = currentSize;
  this.tracker = tracker;

};

Queue.prototype.enqueue = function(value) {
  this.tracker = [value].concat(this.tracker);
  this.currentSize++;
};

Queue.prototype.dequeue = function() {
  this.currentSize--;
  return(this.tracker.splice(-1, 1)[0])
};

Queue.prototype.size = function() {
  if (this.currentSize >= 0) {
    return this.currentSize;
  }

  else {
    return 0;
  }
};


