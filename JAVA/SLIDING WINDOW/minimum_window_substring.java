class Solution {
    public String minWindow(String s, String t) {
        if (t.length() > s.length()) return "";

        int[] need = new int[128];
        for (char c : t.toCharArray()) need[c]++;

        int required = 0;
        for (int i=0; i<128; i++) {
            if (need[i] > 0) required++;
        };

        int[] win = new int[128];
        int formed = 0;
        int bestLen = Integer.MAX_VALUE;
        int bestStart = 0;
        int l = 0;

        for (int r=0; r<s.length(); r++) {
            char rightChar = s.charAt(r);
            win[rightChar]++;
            if (need[rightChar] > 0 && win[rightChar] == need[rightChar]) formed++;

            while (formed == required) {
                int windowLength = r-l+1;
                if (windowLength < bestLen) {
                    bestLen = windowLength;
                    bestStart = l;
                }
                char leftChar = s.charAt(l);
                win[leftChar]--;
                if (need[leftChar] > 0 && win[leftChar] < need[leftChar]) formed--;
                l++;
            }
        }

        if (bestLen == Integer.MAX_VALUE) return "";
        return s.substring(bestStart, bestStart+bestLen);
    }
}