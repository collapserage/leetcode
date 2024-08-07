function insert(intervals: number[][], newInterval: number[]): number[][] {
    let [newStart, newEnd] = newInterval
    let left: number[][] = []
    let right: number[][] = []

    for (const interval of intervals) {
        const [start, end] = interval

        if (end < newStart) {
            left.push(interval)
        } else if (start > newEnd) {
            right.push(interval)
        } else {
            ;[newStart, newEnd] = [Math.min(start, newStart), Math.max(end, newEnd)]
        }
    }

    return [...left, [newStart, newEnd], ...right]
}
