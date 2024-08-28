function topKFrequent(nums: number[], k: number): number[] {
    const frequencies = new Map<number, number>()
    const buckets = []

    for (const number of nums) {
        frequencies.set(number, (frequencies.get(number) || 0) + 1)
    }

    for (const [number, count] of frequencies) {
        if (!buckets[count]) {
            buckets[count] = [number]
        } else {
            buckets[count].push(number)
        }
    }

    return buckets.flat().slice(-k)
}
