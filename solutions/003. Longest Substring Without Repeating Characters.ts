function lengthOfLongestSubstring(s: string): number {
    const indexes = new Map()
    let longest = 0

    for (let leftIndex = 0, rightIndex = 0; rightIndex < s.length; rightIndex++) {
        const character = s[rightIndex]

        if (indexes.has(character) && indexes.get(character) >= leftIndex) {
            leftIndex = indexes.get(character) + 1
        }

        indexes.set(character, rightIndex)
        longest = Math.max(longest, rightIndex - leftIndex + 1)
    }

    return longest
}
