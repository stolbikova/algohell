class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class List {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}

// Least Recently Used
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
    // fron the most recently used (head) to the least recently used (tail)
    this.tail = new Node(null, null);
    this.head = new Node(null, null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  //   Add node after the head. The actual first element is placed right after this dummy head node
  #addNode(node) {
    node.prev = this.head;
    node.next = this.head.next;

    this.head.next.prev = node;
    this.head.next = node;
  }

  #removeNode(node) {
    const prev = node.prev;
    const next = node.next;

    prev.next = next;
    next.prev = prev;
  }

  #moveToHead(node) {
    this.#removeNode(node);
    this.#addNode(node);
  }

  //   The actual last element is placed right before this dummy tail node
  #popTail() {
    const prev = this.tail.prev;
    this.#removeNode(prev);
    return prev;
  }

  //   O(1) time complexity.
  get(key) {
    const node = this.cache.get(key);

    if (!node) return -1;

    this.#moveToHead(node);

    return node.value;
  }
  put(key, value) {
    const node = this.cache.get(key);

    if (!node) {
      const newNode = new Node(key, value);
      this.cache.set(key, newNode);
      this.#addNode(newNode);

      if (this.capacity < this.cache.size) {
        const tail = this.#popTail();
        this.cache.delete(tail.key);
      }
    } else {
      node.value = value;
      this.#moveToHead(node);
      this.cache.set(node.key, node);
    }
  }
}

const lruCache = new LRUCache(2);

lruCache.put(1, 1);
lruCache.put(2, 2);
console.log(lruCache.get(1)); // returns 1

lruCache.put(3, 3); // evicts key 2
console.log(lruCache.get(2)); // returns -1 (not found)

lruCache.put(4, 4); // evicts key 1
console.log(lruCache.get(1)); // returns -1 (not found)
console.log(lruCache.get(3)); // returns 3
console.log(lruCache.get(4)); // returns 4
