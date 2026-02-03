class Solution {
    public int trapRainWater(int[][] heightMap) {
        int m = heightMap.length;
        int n = heightMap[0].length;

        if (m <= 2 || n <= 2) return 0;

        boolean[][] visited = new boolean[m][n];
        PriorityQueue<int[]> pq = new PriorityQueue<>(
            (a, b) -> a[2]-b[2]
        );

        for (int i = 0; i < m; i++) {
            pq.offer(new int[] {i, 0, heightMap[i][0]});
            pq.offer(new int[] {i, n-1, heightMap[i][n-1]});
            visited[i][0] = visited[i][n-1] = true;
        }

        for (int j = 0; j < n; j++) {
            pq.offer(new int[] {0, j, heightMap[0][j]});
            pq.offer(new int[] {m-1, j, heightMap[m-1][j]});
            visited[0][j] = visited[m-1][j] = true;
        }

        int water = 0;
        int[][] dirs = {{1,0},{-1,0},{0,1},{0,-1}};

        while (!pq.isEmpty()) {
            int[] cell = pq.poll();
            int x = cell[0], y = cell[1], h = cell[2];

            for (int[] d : dirs) {
                int mx = x + d[0];
                int ny = y + d[1];

                if (mx < 0 || ny < 0 || mx >= m || ny >= n || visited[mx][ny]) continue;

                visited[mx][ny] = true;

                int nh = heightMap[mx][ny];
                if (nh < h) water += h - nh;

                pq.offer(new int[]{mx, ny, Math.max(h, nh)});
            }
        }
        return water;
    }
}