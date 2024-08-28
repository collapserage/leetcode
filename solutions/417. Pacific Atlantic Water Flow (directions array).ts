function pacificAtlantic(heights: number[][]): number[][] {
    const horizontalSize = heights[0].length
    const verticalSize = heights.length

    const canReachPacific = new Set<string>()
    const canReachAtlantic = new Set<string>()

    const directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
    ]

    const setIntersection = []

    function dfs(row: number, column: number, visitedSet: Set<string>) {
        visitedSet.add(`${row}-${column}`)

        for (const [x, y] of directions) {
            const newRow = row + x
            const newColumn = column + y
            const isOutOfBounds =
                newRow < 0 || newColumn < 0 || newRow >= verticalSize || newColumn >= horizontalSize

            if (isOutOfBounds || visitedSet.has(`${newRow}-${newColumn}`)) {
                continue
            }

            if (heights[newRow][newColumn] >= heights[row][column]) {
                dfs(newRow, newColumn, visitedSet)
            }
        }
    }

    for (let column = 0; column < horizontalSize; column++) {
        dfs(0, column, canReachPacific) // top row
        dfs(verticalSize - 1, column, canReachAtlantic) // bottom row
    }

    for (let row = 0; row < verticalSize; row++) {
        dfs(row, 0, canReachPacific) // left column
        dfs(row, horizontalSize - 1, canReachAtlantic) // right column
    }

    for (let row = 0; row < verticalSize; row++) {
        for (let column = 0; column < horizontalSize; column++) {
            if (canReachPacific.has(`${row}-${column}`) && canReachAtlantic.has(`${row}-${column}`)) {
                setIntersection.push([row, column])
            }
        }
    }

    return setIntersection
}
