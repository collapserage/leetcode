function rob(nums: number[]): number {
    let robHouse = 0
    let skipHouse = 0

    for (const loot of nums) {
        ;[robHouse, skipHouse] = [Math.max(robHouse, skipHouse + loot), robHouse]
    }

    return robHouse
}
