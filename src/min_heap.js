// the value of each node is less than or equal to the values of its children
class MinHeap {
  constructor() {
    this.heap = [];
  }
  insert(val) {
    this.heap.push(val);
    this.#heapifyUp(this.heap.length - 1);
  }
  extractMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.#heapifyDown(0);
    return min;
  }
  getMin() {
    return this.size() > 0 ? this.heap[0] : null;
  }
  size() {
    return this.heap.length;
  }
  #getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }
  #getLeft(i) {
    return 2 * i + 1;
  }
  #getRight(i) {
    return 2 * i + 2;
  }

  #heapifyUp(i) {
    let parentIndex = this.#getParentIndex();
    while (i > 0 && this.heap[i] < this.heap[parentIndex]) {
      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ];
      index = parentIndex;
      parentIndex = this.#getParentIndex(index);
    }
  }
  #heapifyDown(i) {
    let smallest = i;
    let left = this.#getLeft();
    let right = this.#getRight();

    if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }
    if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }

    if (smallest !== index) {
      [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]];
      this.#heapifyDown(smallest);
    }
  }
}

//  1(0)
//  2(1) 3(2)
// 4(3) 5(4)

// Example usage
const minHeap = new MinHeap();
minHeap.insert(3);
minHeap.insert(9);
minHeap.insert(6);
minHeap.insert(15);
minHeap.insert(10);
minHeap.insert(7);
minHeap.insert(8);
minHeap.insert(20);
minHeap.insert(12);

console.log(minHeap.heap);
