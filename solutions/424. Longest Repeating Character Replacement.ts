function characterReplacement(s: string, k: number): number {
    const characterFrequencies: Record<string, number> = {}
    let mostFrequent = 0
    let longest = 0

    for (let leftIndex = 0, rightIndex = 0; rightIndex < s.length; rightIndex++) {
        characterFrequencies[s[rightIndex]] = (characterFrequencies[s[rightIndex]] || 0) + 1
        mostFrequent = Math.max(mostFrequent, characterFrequencies[s[rightIndex]])

        if (rightIndex - leftIndex + 1 - mostFrequent > k) {
            characterFrequencies[s[leftIndex]]--
            leftIndex++
        }

        longest = Math.max(longest, rightIndex - leftIndex + 1)
    }

    return longest
}
