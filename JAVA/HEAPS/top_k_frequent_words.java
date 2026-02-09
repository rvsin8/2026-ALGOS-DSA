class Solution {
    public List<String> topKFrequent(String[] words, int k) {
        Map<String, Integer> freqMap = new HashMap<>();
        for (String word: words) {
            freqMap.put(word, freqMap.getOrDefault(word,0) + 1);
        }

        PriorityQueue<String> minHeap = new PriorityQueue<>(
            (a,b) -> {
                if (freqMap.get(a).equals(freqMap.get(b))) return b.compareTo(a);
                return freqMap.get(a) - freqMap.get(b);
            }
        );

        for (String word : freqMap.keySet()) {
            minHeap.offer(word);
            if (minHeap.size() > k) {
                minHeap.poll();
            }
        };

        List<String> result = new ArrayList<>();
        while (!minHeap.isEmpty()) result.add(minHeap.poll());
        Collections.reverse(result);
        return result;
    }
}