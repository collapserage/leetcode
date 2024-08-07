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
function levelOrder(root: TreeNode | null): number[][] {
    const order: number[][] = []

    function traverse(node: TreeNode | null, depth: number) {
        if (!node) {
            return
        }

        if (!order[depth]) {
            order[depth] = [node.val]
        } else {
            order[depth].push(node.val)
        }

        traverse(node.left, depth + 1)
        traverse(node.right, depth + 1)
    }

    traverse(root, 0)

    return order
}
