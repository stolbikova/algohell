class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function insertionSortList(head) {
  if (!head) return null;

  //  Create a dummy node to act as the starting point of the sorted list
  let dummy = new ListNode(0);
  let current = head;

  while (current) {
    // At each iteration, we remove 'current' from the input list and find its position in the sorted part.
    let prev = dummy;
    while (prev.next && prev.next.val < current.val) {
      prev = prev.next;
    }

    // Store the next node to be processed in the original list.
    let nextNode = current.next;

    // Insert 'current' between 'prev' and 'prev.next'.
    current.next = prev.next;
    prev.next = current;

    // Move to the next node in the original list.
    current = nextNode;
  }

  return dummy.next;
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
  let dummy = new ListNode();
  let current = dummy;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

// Helper function to convert a linked list to an array
function linkedListToArray(head) {
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  return arr;
}

// Example usage:
let arr = [4, 2, 1, 3];
let list = createLinkedList(arr);
let sortedList = insertionSortList(list);
console.log(linkedListToArray(sortedList)); // Output: [1, 2, 3, 4]
