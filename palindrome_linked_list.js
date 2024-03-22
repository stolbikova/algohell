/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    let slow = head;
    let fast = head.next;
    while (fast) {
        slow = slow.next;
        fast = fast.next.next;
    }
};

isPalindrome([1,2,2,1]);