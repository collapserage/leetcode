function isValid(s: string): boolean {
    const PAIRS: Record<string, string> = {
        '(': ')',
        '{': '}',
        '[': ']',
    }

    const stack: string[] = []

    for (const character of s) {
        if (PAIRS[character]) {
            stack.push(PAIRS[character])
        } else if (stack.at(-1) === character) {
            stack.pop()
        } else {
            return false
        }
    }

    return stack.length === 0
}
