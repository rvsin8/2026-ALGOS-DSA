class UnionFind:
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [0] * n

    def find(self, x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]

    def union(self, x, y):
        rootX = self.find(x)
        rootY = self.find(y)

        if rootX == rootY:
            return False  

        if self.rank[rootX] > self.rank[rootY]:
            self.parent[rootY] = rootX
        elif self.rank[rootX] < self.rank[rootY]:
            self.parent[rootX] = rootY
        else:
            self.parent[rootY] = rootX
            self.rank[rootX] += 1

        return True

def hasCycle(n, edges):
    uf = UnionFind(n)

    for u, v in edges:
        if not uf.union(u, v):
            return True 

    return False

n = 3
edges = [(0,1), (1,2), (2,0)]
print(hasCycle(n, edges))

n = 4
edges = [(0,1), (1,2), (2,3)]
print(hasCycle(n, edges))