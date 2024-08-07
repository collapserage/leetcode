function merge(intervals: number[][]): number[][] {
    const merged: number[][] = []

    intervals.sort((a, b) => a[0] - b[0])

    for (const interval of intervals) {
        const last = merged.at(-1)

        if (last && last[1] >= interval[0]) {
            last[1] = Math.max(last[1], interval[1])
        } else {
            merged.push(interval)
        }
    }

    return merged
}
