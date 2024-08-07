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

function findListMiddle(head: ListNode | null): ListNode | null {
    let slow = head
    let fast = head

    while (fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
    }

    return slow
}

function reverseList(head: ListNode | null): ListNode | null {
    let previous = null
    let current = head

    while (current) {
        let next = current.next
        current.next = previous
        previous = current
        current = next
    }

    return previous
}

function mergeLists(list1: ListNode | null, list2: ListNode | null): void {
    while (list2) {
        let next = list1.next
        list1.next = list2
        list1 = list2
        list2 = next
    }
}

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
    const middle = findListMiddle(head)
    const reversed = reverseList(middle.next)

    middle.next = null

    mergeLists(head, reversed)
}
