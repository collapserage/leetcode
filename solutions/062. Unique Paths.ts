function uniquePaths(m: number, n: number, memo: Record<string, number> = {}): number {
    if (m === 1 || n === 1) {
        return 1
    }

    const key = `${m}:${n}`

    if (!memo[key]) {
        memo[key] = uniquePaths(m - 1, n, memo) + uniquePaths(m, n - 1, memo)
    }

    return memo[key]
}
