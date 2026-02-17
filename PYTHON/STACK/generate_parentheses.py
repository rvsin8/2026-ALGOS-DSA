class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        result = []

        def backtrack(current: str, open_brackets: int, closed_brackets: int):
            if len(current) == 2 * n:
                result.append(current)
                return
            
            if open_brackets < n:
                backtrack(current + '(', open_brackets + 1, closed_brackets)
            
            if closed_brackets < open_brackets:
                backtrack(current + ')', open_brackets, closed_brackets + 1)

        backtrack('', 0, 0)

        return result