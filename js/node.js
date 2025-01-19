function node(i,j,state,isStart=false,isEnd=false,isWall=false) {
    this.x = i;
    this.y = j;
    this.f = 0;
    this.g = 0;
    this.h = 0;
    this.state = state; // state is for the empty rectangle
    this.isStart = isStart;
    this.isEnd = isEnd;
    this.isWall = isWall;
    this.neighbors = [];
    this.previous = [];

    this.addNeighbors = function(grid) {
        var i = this.x;
        var j = this.y;
        if(i < cols-1) {
        this.neighbors.push(grid[i+1][j]);
        }
        if(i > 0 ) {
        this.neighbors.push(grid[i-1][j]);
        }
        if(j < rows-2) {
        this.neighbors.push(grid[i][j+1]);
        }
        if(j > 0) {
        this.neighbors.push(grid[i][j-1]);
        }
        if(i > 0 && j > 0) {
        this.neighbors.push(grid[i-1][j-1]);   
        }
        if(i < cols-1 && j > 0) {
            this.neighbors.push(grid[i+1][j-1]);   
        }
        if(i > 0 && j < rows-1) {
            this.neighbors.push(grid[i-1][j+1]);   
        }
        if(i < cols-1 && j < rows-1) {
            this.neighbors.push(grid[i+1][j+1]);   
        }
    }
 }