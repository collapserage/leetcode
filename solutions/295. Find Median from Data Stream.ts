class MedianFinder {
    private leftMaxHeap = new MaxPriorityQueue<number>()
    private rightMinHeap = new MinPriorityQueue<number>()

    addNum(number: number): void {
        if (this.leftMaxHeap.size() === this.rightMinHeap.size()) {
            this.leftMaxHeap.enqueue(number)
            this.rightMinHeap.enqueue(this.leftMaxHeap.dequeue().element)
        } else {
            this.rightMinHeap.enqueue(number)
            this.leftMaxHeap.enqueue(this.rightMinHeap.dequeue().element)
        }
    }

    findMedian(): number {
        if (this.leftMaxHeap.size() < this.rightMinHeap.size()) {
            return this.rightMinHeap.front().element
        }

        return (this.leftMaxHeap.front().element + this.rightMinHeap.front().element) / 2
    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
