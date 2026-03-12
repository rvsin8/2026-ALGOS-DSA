class FirstUnique:

    def __init__(self, nums: List[int]):
        self.queue = deque(nums)
        self.count = Counter(nums)
        

    def showFirstUnique(self) -> int:
        while self.queue and self.count[self.queue[0]] > 1:
            self.queue.popleft()
        if not self.queue:
            return -1
        return self.queue[0]
        

    def add(self, value: int) -> None:
        self.count[value] += 1
        self.queue.append(value)
        