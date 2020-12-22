function starOutGrid(grid) {
    starMatrices=findStar(grid)
    let newGrid = grid
    for (x=0; x < grid.length; x++){
      for (y=0; y < grid[x].length; y++){
        if(starMatrices[0].includes(x) || starMatrices[1].includes(y)){
          newGrid[x][y] = '*'
        }
      }
    }
    return newGrid;
  }
  
  
  function findStar(grid) {
    let xStars = [];
    let yStars = [];
    for (x=0; x < grid.length; x++){
      for (y=0; y < grid[x].length; y++){
        if (grid[x][y] === '*') {
          xStars.push(x)
          yStars.push(y)
        }
      }
    };
    return [xStars, yStars];
  }