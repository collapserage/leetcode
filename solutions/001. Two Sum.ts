function twoSum(nums: number[], target: number): number[] {
    const indexes = new Map()

    for (let i = 0; i < nums.length; i++) {
        const difference = target - nums[i]

        if (indexes.has(nums[i])) {
            return [indexes.get(nums[i]), i]
        }

        indexes.set(difference, i)
    }
}
