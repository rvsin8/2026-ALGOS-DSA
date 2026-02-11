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


def kruskal(n, edges):
    # edges = [(weight, u, v)]
    edges.sort()
    uf = UnionFind(n)
    mst_weight = 0

    for weight, u, v in edges:
        if uf.union(u, v):
            mst_weight += weight

    return mst_weight

n = 3
edges = [
    (1, 0, 1),
    (2, 1, 2),
    (3, 0, 2)
]

print(kruskal(n, edges))

n1 = 4
edges1 = [
    (1, 0, 1),
    (1, 1, 2),
    (1, 2, 0),  # cycle
    (5, 2, 3)
]

print(kruskal(n1, edges1))
