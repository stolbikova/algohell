class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertAtHead(nodeValue) {
    const tmp = this.head;
    this.head = new Node(nodeValue);
    this.head.next = tmp;
  }
  insertAtTail(nodeValue) {
    let cur = this.head;
    while (cur.next !== null) {
      cur = cur.next;
    }
    cur.next = new Node(nodeValue);
  }
  deleteByValue(nodeValue) {
    let fast = this.head.next;
    let slow = this.head;
    while (fast.value !== nodeValue) {
      slow = slow.next;
      fast = fast.next;
    }
    slow.next = fast.next;
  }
  searchByValue(nodeValue) {
    let cur = this.head;
    while (cur.value !== nodeValue) {
      cur = cur.next;
    }
    return cur;
  }
  display() {
    let cur = this.head;
    let res = "";
    while (cur !== null) {
      res += `${cur.value}`;
      if (cur.next) res += " -> ";
      else res += " -> null ";
      cur = cur.next;
    }
    console.log(res);
  }
  reverse() {
    // 1 -> 2 -> 3 -> 4
    // 1 <- 2 <- 3 <- 4
    let cur = this.head;
    let prev = null;
    let next = cur.next;

    while (cur !== null) {
      next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
    }
    this.head = prev;
  }
}

// Example usage
const list = new LinkedList();
list.insertAtHead(3);
list.insertAtHead(2);
list.insertAtHead(1);
list.insertAtTail(4);
list.insertAtTail(5);

console.log("Original List:");
list.display(); // Output: 1 -> 2 -> 3 -> 4 -> 5 -> null

list.deleteByValue(3);
console.log("List after deleting 3:");
list.display(); // Output: 1 -> 2 -> 4 -> 5 -> null

list.reverse();
console.log("Reversed List:");
list.display(); // Output: 5 -> 4 -> 2 -> 1 -> null
