from collections import deque

def num_islands(grid):
    if not grid:
        return 0
    
    linhas, colunas = len(grid), len(grid[0])
    visitado = set()
    ilhas = 0

    def bfs(r, c):
        fila = deque([(r, c)])
        visitado.add((r, c))
        
        while fila:
            x, y = fila.popleft()
           
            for dx, dy in [(1,0), (-1,0), (0,1), (0,-1)]:
                nx, ny = x + dx, y + dy
                if (0 <= nx < linhas and 0 <= ny < colunas 
                    and grid[nx][ny] == "1" 
                    and (nx, ny) not in visitado):
                    fila.append((nx, ny))
                    visitado.add((nx, ny))

    for r in range(linhas):
        for c in range(colunas):
            if grid[r][c] == "1" and (r, c) not in visitado:
                bfs(r, c)
                ilhas += 1

    return ilhas

grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]

print(num_islands(grid))