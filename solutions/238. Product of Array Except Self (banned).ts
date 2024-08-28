function productExceptSelf(nums: number[]): number[] {
    const product = nums.reduce((acc, number) => (number === 0 ? acc : acc * number), 1)
    const zeroesCount = nums.filter((number) => number === 0).length

    if (zeroesCount > 0) {
        return nums.map((number) => (number === 0 && zeroesCount === 1 ? product : 0))
    }

    return nums.map((number) => product / number)
}
