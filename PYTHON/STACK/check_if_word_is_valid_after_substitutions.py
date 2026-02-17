class Solution:
    def isValid(self, s: str) -> bool:
        stack = []

        for char in s:
            stack.append(char)

            if len(stack) >= 3:
                if stack[-3] == 'a' and stack[-2] == 'b' and stack[-1] == 'c':
                    stack.pop()
                    stack.pop()
                    stack.pop()
        
        return len(stack) == 0