function pacificAtlantic(heights: number[][]): number[][] {
    const horizontalSize = heights[0].length
    const verticalSize = heights.length

    const canReachPacific = new Set<string>()
    const canReachAtlantic = new Set<string>()

    const setIntersection = []

    function dfs(row: number, column: number, set: Set<string>, previousHeight: number) {
        const isOutOfBounds = row < 0 || column < 0 || row >= verticalSize || column >= horizontalSize

        if (isOutOfBounds || heights[row][column] < previousHeight || set.has(`${row}-${column}`)) {
            return
        }

        set.add(`${row}-${column}`)

        dfs(row - 1, column, set, heights[row][column])
        dfs(row + 1, column, set, heights[row][column])
        dfs(row, column - 1, set, heights[row][column])
        dfs(row, column + 1, set, heights[row][column])
    }

    for (let column = 0; column < horizontalSize; column++) {
        dfs(0, column, canReachPacific, heights[0][column]) // top row
        dfs(verticalSize - 1, column, canReachAtlantic, heights[verticalSize - 1][column]) // bottom row
    }

    for (let row = 0; row < verticalSize; row++) {
        dfs(row, 0, canReachPacific, heights[row][0]) // left column
        dfs(row, horizontalSize - 1, canReachAtlantic, heights[row][horizontalSize - 1]) // right column
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
