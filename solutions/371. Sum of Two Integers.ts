function getSum(a: number, b: number): number {
    while (b) {
        const carry = (a & b) << 1

        a = a ^ b
        b = carry
    }

    return a
}
