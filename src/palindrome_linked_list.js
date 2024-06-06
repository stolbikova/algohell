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
    // find the middle
    let slow = head;
    let fast = head.next;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // reverse the second part
    let prev = null;
    while (slow) {
        const tmp = slow.next;
       slow.next = prev;
       prev = slow;
       slow = tmp;
    }

    //  Compare 2 halfs
    let left = head;
    let right = prev;
    while (left && right) {
        if (left.val !== right.val) {
            return false
        }
        left = left.next;
        right = right.next;
    }
    return true;
};

console.log(isPalindrome([1,1,2,1]));