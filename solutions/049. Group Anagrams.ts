function groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string, string[]>()

    for (let string of strs) {
        const key = string.split('').sort().join('')

        map.set(key, map.has(key) ? [...map.get(key), string] : [string])
    }

    return Array.from(map.values())
}
