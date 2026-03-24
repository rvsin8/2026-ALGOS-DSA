function lengthOfLongestSubstring(s) {
    let charSet = new Set();
    let left = 0;
    let maxLength = 0;
    for (let right=0; right<s.length; right++) {
      const rightChar = s[right];
      while (charSet.has(rightChar)) {
          const leftChar = s[left];
          charSet.delete(leftChar);
          left++;
      }
      charSet.add(rightChar);
      maxLength = Math.max(maxLength, right-left+1);
    }
    return maxLength;
  };