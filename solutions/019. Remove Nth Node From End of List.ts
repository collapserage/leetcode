/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let left = head
    let right = head

    for (let i = 0; i < n; i++) {
        right = right.next
    }

    if (!right) {
        return head.next
    }

    while (right.next) {
        left = left.next
        right = right.next
    }

    left.next = left.next.next

    return head
}
