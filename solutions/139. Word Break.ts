function wordBreak(s: string, wordDict: string[]): boolean {
    const dictionarySet = new Set(wordDict)
    const wordStarts = [0]

    for (let wordEnd = 0; wordEnd <= s.length; wordEnd++) {
        if (wordStarts.some((wordStart) => dictionarySet.has(s.slice(wordStart, wordEnd)))) {
            wordStarts.push(wordEnd)
        }
    }

    return wordStarts.at(-1) === s.length
}
