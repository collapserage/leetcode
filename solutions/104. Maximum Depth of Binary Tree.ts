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
function maxDepth(root: TreeNode | null): number {
    let maxDepth = 0
    let stack: Array<[TreeNode | null, number]> = [[root, 1]]

    while (stack.length) {
        const [node, depth] = stack.pop()

        if (!node) {
            continue
        }

        maxDepth = Math.max(depth, maxDepth)
        stack.push([node.left, depth + 1])
        stack.push([node.right, depth + 1])
    }

    return maxDepth
}
