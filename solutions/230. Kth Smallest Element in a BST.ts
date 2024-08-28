/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
function kthSmallest(root: TreeNode | null, k: number): number {
    let index = 1
    let smallest = 0

    function traverseInOrder(node: TreeNode | null) {
        if (!node || smallest) {
            return
        }

        traverseInOrder(node.left)

        if (index === k) {
            smallest = node.val
        }

        index++

        traverseInOrder(node.right)
    }

    traverseInOrder(root)

    return smallest
}
