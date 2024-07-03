// the value of each node is less than or equal to the values of its children
class MinHeap {
  constructor() {
    this.heap = [];
  }
  insert(val) {
    this.heap.push(val);
    this.heapify();
  }
  extractMin() {}
  peekMin() {}
  decreaseKey() {}
  delete(index) {}
  heapify() {}
}
