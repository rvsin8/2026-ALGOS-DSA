class Solution {
    public int maxArea(int[] height) {
        int left_pointer = 0;
        int right_pointer = height.length-1;
        int max_area = 0;

        while (left_pointer < right_pointer) {
            int minimum_height = Math.min(height[left_pointer], height[right_pointer]);
            int width = right_pointer-left_pointer;
            int current_area = minimum_height * width;

            max_area = Math.max(current_area, max_area);

            if (height[left_pointer] < height[right_pointer]) left_pointer++;
            else right_pointer--;
        }
        
        return max_area;
    }
}