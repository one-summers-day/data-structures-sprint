class Queue {
  constructor() {
    this.tracker = [];
    this.currentSize = 0;
  }

  enqueue(value) {
    this.tracker = [value].concat(this.tracker);
    this.currentSize++;
  }

  dequeue() {
    this.currentSize--;
    return(this.tracker.splice(-1, 1)[0])
  }

  size() {
    if (this.currentSize >= 0) {
      return this.currentSize;
    }

    else {
      return 0;
    }
  }
}
