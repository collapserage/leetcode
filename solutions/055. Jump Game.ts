function canJump(nums: number[]): boolean {
    let gas = 0

    for (const num of nums) {
        if (gas < 0) {
            return false
        } else if (num > gas) {
            gas = num
        }

        gas--
    }

    return true
}
