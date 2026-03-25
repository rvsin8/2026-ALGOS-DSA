function orangesRotting(grid) {
    let minutes = 0;
    let freshOranges = 0;
    const queue = [];
    const directions = [
        [0,1], [0,-1],
        [1,0], [-1,0]
    ];
    for (let i=0; i<grid.length; i++) {
        for (let j=0; j<grid[0].length; j++) {
            if (grid[i][j] === 2) queue.push([i,j]);
            if (grid[i][j] === 1) freshOranges++;
        }
    };
    while (queue.length && freshOranges > 0) {
        const queueLength = queue.length;
        for (let i=0; i<queueLength; i++) {
            const [row, col] = queue.shift();
            for (let [dx, dy] of directions) {
                const newRow = dx + row;
                const newCol = dy + col;
                if (
                    newRow >= 0 && newRow < grid.length && 
                    newCol >= 0 && newCol < grid[0].length &&
                    grid[newRow][newCol] === 1
                ) {
                    grid[newRow][newCol] = 2;
                    queue.push([newRow, newCol]);
                    freshOranges--;
                }
            }
        }
        minutes++;
    }
    return freshOranges === 0 ? minutes : -1;
};
