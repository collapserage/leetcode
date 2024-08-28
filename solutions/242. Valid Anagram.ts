function isAnagram(s: string, t: string): boolean {
    if (s.length != t.length) {
        return false
    }

    const sLetterFrequency = new Map<string, number>()
    const tLetterFrequency = new Map<string, number>()

    for (let i = 0; i < s.length; i++) {
        sLetterFrequency.set(s[i], (sLetterFrequency.get(s[i]) || 0) + 1)
        tLetterFrequency.set(t[i], (tLetterFrequency.get(t[i]) || 0) + 1)
    }

    return Array.from(sLetterFrequency.keys()).every((letter) => {
        return sLetterFrequency.get(letter) === tLetterFrequency.get(letter)
    })
}
