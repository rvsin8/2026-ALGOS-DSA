from collections import deque
from typing import List

class Solution:
    def shortestPathAllKeys(self, grid: List[str]) -> int:
        m, n = len(grid), len(grid[0])
        keys = 0
        start = None

        for i in range(m):
            for j in range(n):
                if grid[i][j] == '@':
                    start = (i, j)
                if grid[i][j].islower():
                    keys += 1

        target = (1 << keys) - 1

        q = deque([(start[0], start[1], 0, 0)])  # row, col, keyMask, distance
        visited = set([(start[0], start[1], 0)])

        dirs = [(1,0), (-1,0), (0,-1), (0,1)]

        while q:
            x, y, mask, dist = q.popleft()

            if mask == target:
                return dist

            for dx, dy in dirs:
                nx, ny = x + dx, y + dy

                if not (0 <= nx < m and 0 <= ny < n):
                    continue

                cell = grid[nx][ny]

                if cell == '#':
                    continue

                new_mask = mask

                if cell.islower():
                    new_mask |= 1 << (ord(cell) - ord('a'))

                if cell.isupper() and not (new_mask & (1 << (ord(cell) - ord('A')))):
                    continue

                if (nx, ny, new_mask) not in visited:
                    visited.add((nx, ny, new_mask))
                    q.append((nx, ny, new_mask, dist + 1))

        return -1