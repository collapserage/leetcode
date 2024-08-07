function numDecodings(s: string): number {
    let [next1, next2] = [1, 1]

    function check(i: number) {
        if (s[i] === '0') {
            return 0
        }

        const isTwoDigit = i <= s.length - 2 && parseInt(s.slice(i, i + 2)) <= 26

        return isTwoDigit ? next1 + next2 : next1
    }

    for (let i = s.length - 1; i >= 0; --i) {
        ;[next1, next2] = [check(i), next1]
    }

    return next1
}
