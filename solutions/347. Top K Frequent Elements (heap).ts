function topKFrequent(nums: number[], k: number): number[] {
    const frequencies = new Map<number, number>()
    const heap = new MinPriorityQueue()

    for (const number of nums) {
        frequencies.set(number, (frequencies.get(number) || 0) + 1)
    }

    for (const [number, count] of frequencies) {
        heap.enqueue(number, count)

        if (heap.size() > k) {
            heap.dequeue()
        }
    }

    return heap.toArray().map(({ element }) => element as number)
}
