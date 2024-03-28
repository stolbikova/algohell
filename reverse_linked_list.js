function LinkedListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

function invertList(head) {
  if (!head) return null;

  let prev = null;
  let cur = head;
  while (cur) {
    const next = cur.next;

    cur.next = prev;
    prev = cur;
    cur = next;
  }

  return prev;
}

console.log(
  invertList(
    new LinkedListNode(2, new LinkedListNode(3, new LinkedListNode(5)))
  )
);
