function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const visiting = new Set()
    const prerequisitesForCourse: Record<number, number[]> = {}

    for (const [source, target] of prerequisites) {
        if (prerequisitesForCourse[source]) {
            prerequisitesForCourse[source].push(target)
        } else {
            prerequisitesForCourse[source] = [target]
        }
    }

    function canFinishCourse(course: number) {
        if (visiting.has(course)) {
            return false
        }

        if (!prerequisitesForCourse[course]) {
            return true
        }

        visiting.add(course)

        for (const prerequisite of prerequisitesForCourse[course]) {
            if (!canFinishCourse(prerequisite)) {
                return false
            }
        }

        visiting.delete(course)
        prerequisitesForCourse[course] = []

        return true
    }

    for (let i = 0; i < numCourses; i++) {
        if (!canFinishCourse(i)) {
            return false
        }
    }

    return true
}
