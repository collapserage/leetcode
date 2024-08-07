function maxSubArray(nums: number[]): number {
    let sum = 0
    let maxSum = nums[0]

    for (const number of nums) {
        sum = Math.max(number, sum + number)
        maxSum = Math.max(maxSum, sum)
    }

    return maxSum
}
