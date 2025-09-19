def has_cycle(graph):
    visited = set()
    stack = set()
    def dfs(node):
        if node in stack:
            return True
        if node in visited:
            return False
        visited.add(node)
        stack.add(node)
        for nei in graph[node]:
            if dfs(nei):
                return True
        stack.remove(node)
        return False
    for node in graph:
        if dfs(node):
            return True
    return False

print(has_cycle({0:[1],1:[2],2:[0],3:[4],4:[]}))
print(has_cycle({0:[1],1:[2],2:[3],3:[]}))