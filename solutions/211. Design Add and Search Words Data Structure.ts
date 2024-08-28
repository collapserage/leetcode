class TrieNode {
    // using Map instead of an object seems to be 1.5x slower
    constructor(
        public children: Record<string, TrieNode> = {},
        public isEndOfWord = false,
    ) {}
}

class WordDictionary {
    constructor(private root = new TrieNode()) {}

    public addWord(word: string): void {
        let node = this.root

        for (const letter of word) {
            if (!node.children[letter]) {
                node.children[letter] = new TrieNode()
            }

            node = node.children[letter]
        }

        node.isEndOfWord = true
    }

    public search(word: string): boolean {
        return this.searchDepthFirst(word, 0, this.root)
    }

    private searchDepthFirst(word: string, startIndex: number, root: TrieNode): boolean {
        let node = root

        for (let i = startIndex; i < word.length; i++) {
            if (word[i] === '.') {
                return Object.values(node.children).some((innerNode) =>
                    this.searchDepthFirst(word, i + 1, innerNode),
                )
            }

            if (!node.children[word[i]]) {
                return false
            }

            node = node.children[word[i]]
        }

        return node.isEndOfWord
    }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
