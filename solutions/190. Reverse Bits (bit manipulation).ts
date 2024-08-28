function reverseBits(n: number): number {
    let number = n
    let reversed = 0

    for (let i = 0; i < 32; i++) {
        reversed <<= 1

        if (number & 1) {
            reversed++
        }

        number >>= 1
    }

    return reversed >>> 0
}
