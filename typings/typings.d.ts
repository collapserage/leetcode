class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null)
}

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null)
}

class Node {
    val: number
    neighbors: _Node[]
    constructor(val?: number, neighbors?: _Node[])
}

class _Node {
    val: number
    neighbors: _Node[]
    constructor(val?: number, neighbors?: _Node[])
}
