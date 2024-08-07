function longestPalindrome(s: string): string {
    let palindrome = ''

    function expandFromCenter(left: number, right: number) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--
            right++
        }

        if (palindrome.length < right - left) {
            palindrome = s.slice(left + 1, right)
        }
    }

    for (let i = 0; i < s.length; i++) {
        expandFromCenter(i, i)
        expandFromCenter(i, i + 1)
    }

    return palindrome
}
