/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    const rowSet = new Set()
    const columnSet = new Set()

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                rowSet.add(i)
                columnSet.add(j)
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (rowSet.has(i) || columnSet.has(j)) {
                matrix[i][j] = 0
            }
        }
    }
}
