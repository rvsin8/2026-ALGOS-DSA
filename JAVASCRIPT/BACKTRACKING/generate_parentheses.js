function generateParenthesis(n) {
    const result = [];
    function backtrack(open, close, currentStr) {
        if (open === 0 && close === 0) {
            result.push(currentStr);
            return;
        }
        if (open > 0) backtrack(open-1, close, currentStr + '(');
        if (close > open) backtrack(open, close-1, currentStr + ')');
    }
    backtrack(n, n,  "");
    return result;
}