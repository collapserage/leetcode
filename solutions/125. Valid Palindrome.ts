function isPalindrome(s: string): boolean {
    const alphanumericString = s.replace(/[^\p{Letter}\d]/gu, '').toLowerCase()

    for (let left = 0, right = alphanumericString.length - 1; left <= right; left++, right--) {
        if (alphanumericString[left] !== alphanumericString[right]) {
            return false
        }
    }

    return true
}
