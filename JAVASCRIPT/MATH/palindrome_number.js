function isPalindrome(x) {
    if (x < 0) return false;
    const original = x;
    let reversed = 0;

    while (x > 0) {
        const digit = x % 10;
        reversed = reversed * 10 + digit;
        x = Math.floor(x/10);
    };

    return reversed === original;
};