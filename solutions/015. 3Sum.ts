function threeSum(nums: number[]): number[][] {
    const triplets: Record<string, number[]> = {}

    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) {
            break
        }

        if (nums[i] === nums[i - 1]) {
            continue
        }

        let left = i + 1
        let right = nums.length - 1

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right]

            if (sum === 0) {
                const triplet = [nums[i], nums[left], nums[right]]

                triplets[triplet.toString()] = triplet
                left++
                right--
            } else if (sum > 0) {
                right--
            } else {
                left++
            }
        }
    }

    return Object.values(triplets)
}
