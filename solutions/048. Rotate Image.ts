/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    matrix = matrix.reverse()

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < i; j++) {
            ;[matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }
}
