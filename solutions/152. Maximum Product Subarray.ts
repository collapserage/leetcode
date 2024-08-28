function maxProduct(nums: number[]): number {
    let lowestSoFar = nums[0]
    let highestSoFar = lowestSoFar
    let highest = lowestSoFar

    for (let i = 1; i < nums.length; i++) {
        const number = nums[i]
        const candidateOne = lowestSoFar * number
        const candidateTwo = highestSoFar * number

        lowestSoFar = Math.min(number, candidateOne, candidateTwo)
        highestSoFar = Math.max(number, candidateOne, candidateTwo)
        highest = Math.max(highestSoFar, highest)
    }

    return highest
}
