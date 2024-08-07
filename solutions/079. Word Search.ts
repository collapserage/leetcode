function exist(board: string[][], word: string): boolean {
    const path = new Set<string>()

    function isOutOfBounds(i: number) {
        return i < 0 || i >= board.length
    }

    function findWord(i: number, j: number, wordIndex: number): boolean {
        if (wordIndex === word.length) {
            return true
        }

        if (isOutOfBounds(i) || board[i][j] !== word[wordIndex] || path.has(`${i}-${j}`)) {
            return false
        }

        path.add(`${i}-${j}`)

        const result =
            findWord(i + 1, j, wordIndex + 1) ||
            findWord(i - 1, j, wordIndex + 1) ||
            findWord(i, j + 1, wordIndex + 1) ||
            findWord(i, j - 1, wordIndex + 1)

        path.delete(`${i}-${j}`)

        return result
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === word[0] && findWord(i, j, 0)) {
                return true
            }
        }
    }

    return false
}
