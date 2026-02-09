class Solution {
    public int[][] kClosest(int[][] points, int k) {
        PriorityQueue<int[]> maxHeap = new PriorityQueue<>(
            (a,b) -> Integer.compare(distSq(b), distSq(a))
        );
        
        for (int[] p : points) {
            maxHeap.offer(p);
            if (maxHeap.size() > k) maxHeap.poll();
        };

        int[][] result = new int[k][2];

        for (int i=0; i < k; i++) result[i] = maxHeap.poll();

        return result;
    };

    private int distSq(int[] p) {
        int x = p[0];
        int y = p[1];
        return x * x + y * y;
    }
};