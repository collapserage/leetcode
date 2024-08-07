function combinationSum(candidates: number[], target: number): number[][] {
    const combinations: number[][] = []

    function find(combination: number[], sum: number, startIndex: number) {
        for (let i = startIndex; i < candidates.length; i++) {
            const nextCombination = [...combination, candidates[i]]

            if (sum + candidates[i] === target) {
                combinations.push(nextCombination)
            } else if (sum + candidates[i] <= target) {
                find(nextCombination, sum + candidates[i], i)
            }
        }
    }

    find([], 0, 0)

    return combinations
}
