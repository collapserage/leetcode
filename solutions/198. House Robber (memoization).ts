function rob(nums: number[], i = nums.length - 1, memo: Record<number, number> = {}): number {
    if (i < 0) {
        return 0
    }

    if (i in memo) {
        return memo[i]
    }

    memo[i] = Math.max(rob(nums, i - 2, memo) + nums[i], rob(nums, i - 1, memo))

    return memo[i]
}
