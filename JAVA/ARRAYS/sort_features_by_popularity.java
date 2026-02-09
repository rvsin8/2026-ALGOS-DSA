class Solution {
    public String[] sortFeatures(String[] features, String[] responses) {
        Map<String, Integer> countMap = new HashMap<>();

        for (String feature : features) {
            countMap.put(feature, 0);
        }

        for (String response : responses) {
            Set<String> seenInResponse = new HashSet<>();

            String[] words = response.split(" ");

            for (String word : words) {
                seenInResponse.add(word);
            }

            for (String feature : features) {
                if (seenInResponse.contains(feature)) countMap.put(feature, countMap.get(feature) + 1);
            }
        }

        Arrays.sort(features, (a,b) -> {
            if (!countMap.get(a).equals(countMap.get(b))) {
                return countMap.get(b) - countMap.get(a);
            }
            return 0;
        });

        return features;
    }
}