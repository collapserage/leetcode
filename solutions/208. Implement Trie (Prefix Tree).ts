class TrieNode {
    constructor(
        public children = new Map<string, TrieNode>(),
        public isEndOfWord = false,
    ) {}
}

class Trie {
    constructor(private root = new TrieNode()) {}

    public insert(word: string): void {
        let node = this.root

        for (const letter of word) {
            if (!node.children.has(letter)) {
                node.children.set(letter, new TrieNode())
            }

            node = node.children.get(letter)
        }

        node.isEndOfWord = true
    }

    public search(word: string): boolean {
        const node = this.searchNode(word)

        return !!node?.isEndOfWord
    }

    public startsWith(prefix: string): boolean {
        return !!this.searchNode(prefix)
    }

    private searchNode(prefix: string): TrieNode | null {
        let node = this.root

        for (const letter of prefix) {
            if (!node.children.has(letter)) {
                return null
            }

            node = node.children.get(letter)
        }

        return node
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
