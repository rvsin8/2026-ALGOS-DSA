class Solution {
    public int longestCommonPrefix(int[] arr1, int[] arr2) {
        Set<String> prefixes = new HashSet<>();

        for (int num : arr1) {
            String s = String.valueOf(num);
            StringBuilder prefix = new StringBuilder();
            for (char c : s.toCharArray()) {
                prefix.append(c);
                prefixes.add(prefix.toString());
            }
        }

        int maxLen = 0;

        for (int num : arr2) {
            String s = String.valueOf(num);
            StringBuilder prefix = new StringBuilder();
            for (char c : s.toCharArray()) {
                prefix.append(c);
                if (prefixes.contains(prefix.toString())) {
                    maxLen = Math.max(maxLen, prefix.length());
                }
            }
        }

        return maxLen;
    }
}