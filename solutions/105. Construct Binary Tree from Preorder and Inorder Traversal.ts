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
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    const inorderIndexes: Record<number, number> = {}

    preorder = preorder.reverse()
    inorder.forEach((value, index) => (inorderIndexes[value] = index))

    function build(start: number, end: number) {
        if (start > end) {
            return null
        }

        const root = new TreeNode(preorder.pop())

        root.left = build(start, inorderIndexes[root.val] - 1)
        root.right = build(inorderIndexes[root.val] + 1, end)

        return root
    }

    return build(0, inorder.length - 1)
}
