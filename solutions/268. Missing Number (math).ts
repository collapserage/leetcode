function missingNumber(nums: number[]): number {
    const sequenceSum = (nums.length * (nums.length + 1)) / 2
    const actualSum = nums.reduce((accumulator, number) => accumulator + number, 0)

    return sequenceSum - actualSum
}
