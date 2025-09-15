def longest_increasing_path(matrix):
    if not matrix:
        return 0
    rows, cols = len(matrix), len(matrix[0])
    memo = [[0]*cols for _ in range(rows)]
    directions = [(1,0),(-1,0),(0,1),(0,-1)]
    def dfs(r, c):
        if memo[r][c]:
            return memo[r][c]
        val = matrix[r][c]
        best = 1
        for dr, dc in directions:
            nr, nc = r+dr, c+dc
            if 0 <= nr < rows and 0 <= nc < cols and matrix[nr][nc] > val:
                best = max(best, 1 + dfs(nr, nc))
        memo[r][c] = best
        return best
    return max(dfs(r, c) for r in range(rows) for c in range(cols))

print(longest_increasing_path([
 [9,9,4],
 [6,6,8],
 [2,1,1]
]))