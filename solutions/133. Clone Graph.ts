/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     neighbors: _Node[]
 *
 *     constructor(val?: number, neighbors?: _Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 *
 */
const map = new Map<_Node, _Node>()

function cloneGraph(node: _Node | null): _Node | null {
    if (!node) {
        return null
    }

    if (!map.has(node)) {
        map.set(node, new Node(node.val))
        map.get(node).neighbors = node.neighbors.map(cloneGraph)
    }

    return map.get(node)
}
