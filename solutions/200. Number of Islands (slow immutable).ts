function numIslands(grid: string[][]): number {
    const visited = new Set()
    let count = 0

    function markAsVisited(x: number, y: number) {
        if (grid[x][y] === '0' || visited.has(`${x}-${y}`)) {
            return
        }

        visited.add(`${x}-${y}`)

        if (x > 0) {
            markAsVisited(x - 1, y)
        }

        if (x < grid.length - 1) {
            markAsVisited(x + 1, y)
        }

        if (y > 0) {
            markAsVisited(x, y - 1)
        }

        if (y < grid[x].length - 1) {
            markAsVisited(x, y + 1)
        }
    }

    for (let x = 0; x < grid.length; x++) {
        for (let y = 0; y < grid[x].length; y++) {
            if (grid[x][y] === '1' && !visited.has(`${x}-${y}`)) {
                count++
                markAsVisited(x, y)
            }
        }
    }

    return count
}
