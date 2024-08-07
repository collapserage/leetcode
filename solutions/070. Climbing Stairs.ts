function climbStairs(n: number, memo: Record<string, number> = {}): number {
    if (n === 0 || n === 1) {
        return 1
    }

    if (!memo[n]) {
        memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo)
    }

    return memo[n]
}
