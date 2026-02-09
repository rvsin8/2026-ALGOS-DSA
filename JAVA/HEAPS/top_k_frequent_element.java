class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> freqMap = new HashMap<>();
        for (int num : nums) freqMap.put(num, freqMap.getOrDefault(num, 0) + 1);

        List<Integer>[] buckets = new ArrayList[nums.length+1];
        for (int i = 0; i < buckets.length; i++) buckets[i] = new ArrayList<>();

        for (int num : freqMap.keySet()) {
            int freq = freqMap.get(num);
            buckets[freq].add(num);
        };

        int[] result = new int[k];
        int index = 0;

        for (int i = buckets.length-1; i >= 0 && index < k; i--) {
            for (int num : buckets[i]) {
                result[index++] = num;
                if (index == k) break;
            }
        }

        return result;
    }
}