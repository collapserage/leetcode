function hammingWeight(n: number): number {
    let number = n
    let onesCount = 0

    while (number) {
        if (number & 1) {
            onesCount++
        }

        number >>>= 1
    }

    return onesCount
}
