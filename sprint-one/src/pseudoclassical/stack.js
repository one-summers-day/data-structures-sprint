var Stack = function(currentSize = 0, tracker = []) {
  this.currentSize = currentSize;
  this.tracker = tracker;
};

Stack.prototype.push = function(value) {
  this.tracker = this.tracker.concat(value);
  this.currentSize++;
};

Stack.prototype.pop = function() {
  this.currentSize--;
  return(this.tracker.splice(-1, 1)[0])
};

Stack.prototype.size = function() {
  if (this.currentSize >= 0) {
    return this.currentSize;
  }

  else {
    return 0;
  }
}


