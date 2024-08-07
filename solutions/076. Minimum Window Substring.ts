function minWindow(haystack: string, needle: string): string {
    const map: Record<string, number> = {}
    let minStart = 0
    let minLength = Infinity
    let charactersToFind = needle.length

    for (let character of needle) {
        map[character] = (map[character] || 0) + 1
    }

    for (let right = 0, left = 0; right < haystack.length; right++) {
        if (map[haystack[right]] > 0) {
            charactersToFind--
        }

        map[haystack[right]]--

        while (charactersToFind === 0) {
            if (right - left + 1 < minLength) {
                minStart = left
                minLength = right - left + 1
            }

            if (map[haystack[left]] >= 0) {
                charactersToFind++
            }

            map[haystack[left]]++
            left++
        }
    }

    return minLength === Infinity ? '' : haystack.slice(minStart, minStart + minLength)
}
