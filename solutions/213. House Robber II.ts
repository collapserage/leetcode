function rob(nums: number[]): number {
    function houseRobber(nums: number[]): number {
        const dp = [nums[0], Math.max(nums[0], nums[1])]

        for (let i = 2; i < nums.length; i++) {
            dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
        }

        return dp[nums.length - 1]
    }

    if (nums.length === 1) {
        return nums[0]
    }

    return Math.max(houseRobber(nums.slice(0, -1)), houseRobber(nums.slice(1)))
}
