function twoSum(nums: number[], target: number): number[] {
    const indexes: Record<number, number> = {}

    for (const [index, number] of nums.entries()) {
        if (number in indexes) {
            return [index, indexes[number]]
        }

        indexes[target - number] = index
    }
}
