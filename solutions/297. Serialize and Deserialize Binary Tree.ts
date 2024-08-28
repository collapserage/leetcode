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

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
    const values: Array<number | null> = []

    function traversePreOrder(node: TreeNode | null) {
        values.push(node?.val)

        if (node) {
            traversePreOrder(node.left)
            traversePreOrder(node.right)
        }
    }

    traversePreOrder(root)

    return values.join(',')
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
    const values = data.split(',')
    let index = 0

    function build() {
        if (!values[index]) {
            index++
            return null
        }

        const node = new TreeNode(Number(values[index]))

        index++
        node.left = build()
        node.right = build()

        return node
    }

    return build()
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
