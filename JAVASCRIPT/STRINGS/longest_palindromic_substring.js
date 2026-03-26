function longestPalindrome(s) {
    let result = '';
    for (let i=0; i<s.length; i++) {
        const even = expand(i, i+1);
        const odd = expand(i, i);
        const maxLength = even.length > odd.length ? even : odd;
        result = maxLength.length > result.length ? maxLength : result;
    }
    function expand(left, right) {
        while (left >= 0 && right <= s.length-1 && s[left] === s[right]) {
            left--;
            right++;
        }
        return s.slice(left+1, right)
    }
    return result;
};