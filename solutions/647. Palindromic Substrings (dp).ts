function countSubstrings(s: string): number {
    const dp = Array.from({ length: s.length }, () => Array(s.length).fill(false)) // fill can be removed for maximum optimization
    let count = 0

    for (let length = 0; length < s.length; length++) {
        for (let i = 0, j = i + length; i + length < s.length; i++, j++) {
            if (s[i] === s[j] && (length <= 1 || dp[i + 1][j - 1])) {
                dp[i][j] = true
                count++
            }
        }
    }

    return count
}
