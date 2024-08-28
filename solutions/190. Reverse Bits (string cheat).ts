function reverseBits(n: number): number {
    let reversedBits = n.toString(2).split('').reverse().join('')

    return parseInt(reversedBits.padEnd(32, '0'), 2)
}
