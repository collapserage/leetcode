import { MaxPriorityQueue as Max, MinPriorityQueue as Min } from 'datastructures-js'

declare global {
    class MinPriorityQueue<T> extends Min<T> {}

    class MaxPriorityQueue<T> extends Max<T> {}
}
