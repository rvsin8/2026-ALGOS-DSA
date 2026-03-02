class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
        int n = nums.length;
        int[] res = new int[n-k+1];
        Deque<Integer> dq = new ArrayDeque<>();
        int resIdx = 0;
        for (int r=0; r<n; r++) {
            while (!dq.isEmpty() && dq.peekFirst() < r - k + 1) dq.pollFirst();
            while (!dq.isEmpty() && nums[dq.peekLast()] <= nums[r]) dq.pollLast();
            dq.offerLast(r);
            if (r >= k - 1) {
                res[resIdx] = nums[dq.peekFirst()];
                resIdx++;
            }
        }

        return res;
    }
}