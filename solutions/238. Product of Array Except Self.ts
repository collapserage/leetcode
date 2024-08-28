function productExceptSelf(nums: number[]): number[] {
    const numbers = new Array(nums.length).fill(1)

    function multiplier(product: number, number: number, index: number) {
        numbers[index] *= product

        return product * number
    }

    nums.reduce(multiplier, 1)
    nums.reduceRight(multiplier, 1)

    return numbers
}
