class TrieNode {
    constructor(
        public children: Record<string, TrieNode> = {},
        public isEndOfWord = false,
    ) {}
}

class Trie {
    public root = new TrieNode()

    constructor(words: string[]) {
        words.forEach((word) => this.insert(word))
    }

    public insert(word: string): void {
        let node = this.root

        for (const letter of word) {
            if (!node.children[letter]) {
                node.children[letter] = new TrieNode()
            }

            node = node.children[letter]
        }

        node.isEndOfWord = true
    }

    public remove(word: string) {
        let node = this.root
        let nodes: Array<[TrieNode, string]> = []

        for (const letter of word) {
            nodes.push([node, letter])
            node = node.children[letter]
        }

        for (const [node, letter] of nodes.reverse()) {
            let targetNode = node.children[letter]

            if (Object.values(targetNode.children).length === 0) {
                delete node.children[letter]
            } else {
                return
            }
        }
    }
}

function findWords(board: string[][], words: string[]): string[] {
    const trie = new Trie(words)
    const path = new Set<string>()
    const found = new Set<string>()

    function isOutOfBounds(i: number, j: number) {
        return i < 0 || i >= board.length || j < 0 || j >= board[0].length
    }

    function findWord(i: number, j: number, oldWord: string, oldNode: TrieNode): boolean {
        if (isOutOfBounds(i, j) || path.has(`${i}-${j}`) || !oldNode.children[board[i][j]]) {
            return false
        }

        const word = oldWord + board[i][j]
        const node = oldNode.children[board[i][j]]

        path.add(`${i}-${j}`)

        if (node.isEndOfWord) {
            found.add(word)
            node.isEndOfWord = false
            trie.remove(word)
        }

        findWord(i + 1, j, word, node)
        findWord(i - 1, j, word, node)
        findWord(i, j + 1, word, node)
        findWord(i, j - 1, word, node)

        path.delete(`${i}-${j}`)
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (trie.root.children[board[i][j]]) {
                findWord(i, j, '', trie.root)
            }
        }
    }

    return Array.from(found)
}
