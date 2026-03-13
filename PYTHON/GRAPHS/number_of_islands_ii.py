class Solution:
    def numIslands2(self, m: int, n: int, positions: List[List[int]]) -> List[int]:
        parent = {}
        rank = {}
        count = 0
        res = []

        def find(x):
            if parent[x] != x:
                parent[x] = find(parent[x])
            return parent[x]
        
        def union(x, y):
            nonlocal count
            rootX, rootY = find(x), find(y)
            if rootX == rootY:
                return
            if rank[rootX] < rank[rootY]:
                parent[rootX] = rootY
            elif rank[rootX] < rank[rootY]:
                parent[rootY] = rootX
            else:
                parent[rootY] = rootX
                rank[rootX] +=1
            count -= 1
        
        grid = set()
        directions = [(1,0), (-1,0), (0,1), (0,-1)]
        for r,c in positions:
            if (r,c) in grid:
                res.append(count)
                continue
            grid.add((r,c))
            parent[(r,c)] = (r,c)
            rank[(r,c)] = 0
            count += 1

            for dr, dc in directions:
                nr, nc = dr + r, dc + c
                if (nr, nc) in grid:
                    union((r,c), (nr, nc))
            res.append(count)
        return res