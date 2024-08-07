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
function maxPathSum(root: TreeNode | null): number {
    let max = -Infinity

    function findMax(node: TreeNode | null): number {
        if (!node) {
            return 0
        }

        const leftMax = findMax(node.left)
        const rightMax = findMax(node.right)

        max = Math.max(max, node.val + leftMax + rightMax)

        return Math.max(0, node.val + leftMax, node.val + rightMax)
    }

    findMax(root)

    return max
}
