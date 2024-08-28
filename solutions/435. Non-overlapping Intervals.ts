function eraseOverlapIntervals(intervals: number[][]): number {
    intervals.sort((a, b) => a[1] - b[1])

    let previousEnd = -Infinity
    let removedCount = 0

    for (const [start, end] of intervals) {
        if (start < previousEnd) {
            removedCount++
        } else {
            previousEnd = end
        }
    }

    return removedCount
}
