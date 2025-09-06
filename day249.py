def combinations_sum(n):
    result = []
    def backtrack(remaining, start, path):
        if remaining == 0:
            result.append(path)
            return
        for i in range(start, n + 1):
            if i <= remaining:
                backtrack(remaining - i, i, path + [i])
    backtrack(n, 1, [])
    return result

print(combinations_sum(5))