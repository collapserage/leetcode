function longestConsecutive(nums: number[]): number {
    const numsSet = new Set(nums)
    let longestLength = 0

    for (const num of numsSet) {
        if (numsSet.has(num - 1)) {
            continue
        }

        let length = 0

        while (numsSet.has(num + length)) {
            length++
        }

        longestLength = Math.max(longestLength, length)
    }

    return longestLength
}
