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
function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    function isEqual(a: TreeNode | null, b: TreeNode | null): boolean {
        if (!a && !b) {
            return true
        }

        if (!a || !b) {
            return false
        }

        return a.val === b.val && isEqual(a.left, b.left) && isEqual(a.right, b.right)
    }

    if (!root) {
        return false
    }

    return isEqual(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
}
