class Solution:
  def findRedundantConnection(self, edges):
    n = len(edges)
    parent = list(range(n+1))
    rank = [0] * (n + 1)

    def find(x):
      if parent[x] != x:
        parent[x] = find(parent[x])
      return parent[x]
    
    def union(x, y):
      rootX = find(x)
      rootY = find(y)

      if rootX == rootY
        return False
      
      if rank[rootX] > rank[rootY]:
        rank[rootY] = rank[rootX]
      elif rank[rootX] < rank[rootY]:
        rank[rootX] = rank[rootY]
      else:
        parent[rootY] = rootX
        rank[rootX] += 1
      
      return True
    
    for u, v in edges:
      if not union(u, v):
        return [u,v]

  