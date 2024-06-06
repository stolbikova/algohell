function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let cur = head;
  while (cur) {
    while (cur.next && cur.val === cur.next.val) {
      cur.next = cur.next.next;
    }
    cur = cur.next;
  }
  return head;
};

const head = new ListNode(1, new ListNode(1, new ListNode(2, null)));

console.log(deleteDuplicates(head));
