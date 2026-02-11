class Solution:
    def minimumCost(self, n, connections):
        edges = [(cost, x-1, y-1) for x, y, cost in connections]
        edges.sort()

        uf = UnionFind(n)
        total_cost = 0

        for cost, u, v in edges:
            if uf.union(u, v):
                total_cost += cost
            
        if uf.components == 1:
            return total_cost
        else:
            return -1

class UnionFind:
  def __init__(self, n):
    self.parent = list(range(n))
    self.rank = [0] * n
    self.components = n

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
    
    self.components -= 1
    return True
