class QElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

// max length of this data structure is k where is a second arg in initial function
class MinPriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(element, priority) {
    let qElement = new QElement(element, priority);
    let added = false;

    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].priority > qElement.priority) {
        this.items.splice(i, 0, qElement);
        added = true;
        break;
      }
    }

    if (!added) {
      this.items.push(qElement);
    }
  }

  dequeue() {
    if (this.size() === 0) return null;
    return this.items.shift();
  }

  size() {
    return this.items.length;
  }

  front() {
    if (this.size() === 0) return null;
    return this.items[0];
  }
}

function findKthLargest(nums, k) {
  let minHeap = new MinPriorityQueue();
  nums.forEach((num) => {
    minHeap.enqueue(num, num);
    if (minHeap.size() > k) {
      minHeap.dequeue();
    }
  });
  return minHeap.front().element;
}

// Example usage:
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // Output: 5
