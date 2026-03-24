var maxAreaOfIsland = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    let maxArea = 0;
  
    function dfs(row, col) {
      if (row < 0 || col < 0 || row >= m || col >= n || grid[row][col] === 0) return 0;
      grid[row][col] = 0;
      return (
        1 + dfs(row+1, col) + dfs(row-1, col)  + dfs(row, col+1) + dfs(row, col-1) 
      )
    }
  
    for (let i=0; i<m; i++){ 
      for (let j=0; j<n; j++) {
        if (grid[i][j] === 1) {
          let localArea = dfs(i, j);
          maxArea = Math.max(localArea, maxArea)
        }
      }
    }

    return maxArea;
  };