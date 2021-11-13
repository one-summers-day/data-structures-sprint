class Stack {
  constructor() {
    this.tracker = [];
    this.currentSize = 0;
  }

  push(value) {
    this.tracker = this.tracker.concat(value);
    this.currentSize++;
  }

  pop() {
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