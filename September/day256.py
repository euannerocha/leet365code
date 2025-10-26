from collections import deque

def shortest_path_maze(grid):
    if not grid or grid[0][0] == 1:
        return -1
    rows, cols = len(grid), len(grid[0])
    directions = [(1,0),(-1,0),(0,1),(0,-1)]
    queue = deque([((0,0),1)])
    visited = set((0,0))
    while queue:
        (r,c), dist = queue.popleft()
        if r == rows-1 and c == cols-1:
            return dist
        for dr, dc in directions:
            nr, nc = r+dr, c+dc
            if 0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] == 0 and (nr,nc) not in visited:
                visited.add((nr,nc))
                queue.append(((nr,nc), dist+1))
    return -1

print(shortest_path_maze([
 [0,0,0,0],
 [1,1,0,1],
 [0,0,0,0],
 [0,1,1,0],
 [0,0,0,0]
]))