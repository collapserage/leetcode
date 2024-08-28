function topKFrequent(nums: number[], k: number): number[] {
    const frequencies = nums.reduce(
        (frequencies, number) => frequencies.set(number, (frequencies.get(number) || 0) + 1),
        new Map<number, number>(),
    )

    return Array.from(frequencies.keys())
        .sort((a, b) => frequencies.get(b) - frequencies.get(a))
        .slice(0, k)
}
