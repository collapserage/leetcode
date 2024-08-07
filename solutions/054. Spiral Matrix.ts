function spiralOrder(matrix: number[][]): number[] {
    enum Direction {
        Right,
        Down,
        Left,
        Up,
    }

    const elements: number[] = []

    const horizontalSize = matrix[0].length
    const verticalSize = matrix.length

    let direction = horizontalSize > 1 ? Direction.Right : Direction.Down

    let [top, left, bottom, right] = [0, 0, verticalSize - 1, horizontalSize - 1]
    let [i, j] = [0, 0]

    while (elements.length < horizontalSize * verticalSize) {
        elements.push(matrix[i][j])

        switch (direction) {
            case Direction.Right: {
                j++
                if (j === right) {
                    direction = Direction.Down
                    top++
                }
                break
            }

            case Direction.Down: {
                i++
                if (i === bottom) {
                    direction = Direction.Left
                    right--
                }
                break
            }

            case Direction.Left: {
                j--
                if (j === left) {
                    direction = Direction.Up
                    bottom--
                }
                break
            }

            case Direction.Up: {
                i--
                if (i === top) {
                    direction = Direction.Right
                    left++
                }
                break
            }
        }
    }

    return elements
}
