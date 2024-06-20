function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function hasCycle(head) {
  if (head === null || head.next === null) return false;
  let slow = head;
  let fast = head.next;

  while (fast !== slow) {
    if (fast === null || fast.next === null) return false;

    slow = slow.next;
    fast = fast.next.next;
  }

  return true;
}

let head = null;
head = new ListNode(1);
head.next = new ListNode(2);
console.log("must be false", hasCycle(head));

head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = head;
console.log("must be true", hasCycle(head));
