function countSubstrings(s: string): number {
    let count = 0

    function expandFromCenter(left: number, right: number) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--
            right++
            count++
        }
    }

    for (let i = 0; i < s.length; i++) {
        expandFromCenter(i, i)
        expandFromCenter(i, i + 1)
    }

    return count
}
