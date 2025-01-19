////////////////////////////////////////////////////////////

 var canvas ;
 var ctx;

 var WIDTH = 1300;
 var HEIGHT = 650;

 //  number of column and number of rows
 var cols = 34;
 var rows = 18;
 var grid = new Array(cols);

 //////  width and height of each node
 var w , h;
 
////////////// start and end node
 var Start;
 var End;

 ////////////////////////////

 var openSet = [];         //// Open and Closed Set for A* implementation
 var closedSet = [];
 var path = [];
/////////////////////////////////
 function createNode(x,y,state) {
     this.x = x;
     this.y = y;
     this.state = state;

    //  if(this.state != 's' && this.state != 'f') {
    //      if (Math.random(1) < 0.1) {
    //          state = 'w';
    //      }
    //  }

     if(state == 's') {
        ctx.fillStyle = "#02e67b"; 
        ctx.fillRect(this.x*(w),this.y*(h),w,h);
     }
     else if(state == 'f') {
        ctx.fillStyle = '#f81010'
        ctx.fillRect(this.x*(w),this.y*(h),w,h);
     }
     else if(state == 'w') {
        ctx.fillStyle = '#1e2431'
        ctx.fillRect(this.x*(w),this.y*(h),w,h);
     }
     else if(state == 'e') {
        ctx.strokeStyle = 'rgba(142, 142, 238, 0.904)';
        ctx.strokeRect(this.x*(w),this.y*(h),w,h);
     }
     else if(state == 'n') {
        ctx.fillStyle = "#9d0dd6"; 
        ctx.fillRect(this.x*(w),this.y*(h),w,h);
     }
     else if(state == 'p') {
        ctx.fillStyle = "#43e0e0"; 
        ctx.fillRect(this.x*(w),this.y*(h),w,h);
     }
     else if(state == 'c') {
        ctx.fillStyle = "##7d30f8"; 
        ctx.fillRect(this.x*(w),this.y*(h),w,h);
     }
    }

 function clear() {
     ctx.clearRect(0,0,WIDTH,HEIGHT)
    }

 function stateForm() {
    grid[0][0].state = 's';
    grid[cols-1][rows-1].state = 'f';

//     for(var i = 0; i< cols ; i++) {
//         for(var j = 0; j < rows; j++) {
//              if(grid[i][j].state != 's' && grid[i][j].state != 'f') {
//                   if (Math.random(1) < 0.2) {
//                       grid[i][j].state = 'w';
//                   }
//           }
//     }
//    }
 }

  function nodeTypeForm() {
    for(var i = 0; i< cols ; i++) {
        for(var j = 0; j < rows; j++) {

             if(grid[i][j].state == 's' ) {
                 grid[i][j].isStart = true;
            }
             if(grid[i][j].state == 'f' ) {
                 grid[i][j].isEnd = true;
            }
            if(grid[i][j].state == 'w' ) {
                grid[i][j].isWall = true;
           }
    }
  }
  }

 function draw() {
    clear();
    // making a 2d array 
    for(var i = 0; i <cols; i++) {
        grid[i] = new Array(rows)
    }

    for(var i = 0; i< cols ; i++) {
        for(var j = 0; j < rows; j++) {
            grid[i][j] = new node(i,j,'e');
        }
    }

    stateForm();

    nodeTypeForm();
    
    
    for(var i = 0; i< cols ; i++) {
        for(var j = 0; j < rows; j++) {
            createNode(grid[i][j].x,grid[i][j].y,grid[i][j].state);
        }
    }
     
    for(var i = 0; i< cols ; i++) {
        for(var j = 0; j < rows; j++) {
            grid[i][j].addNeighbors(grid);
        }
    }

     Start = grid[0][0];
     End = grid[cols-1][rows-1];

     
     
    // ctx.strokeStyle = 'red';
    // ctx.strokeRect(0,0,w,h);
    // console.log(grid);
    // solveAStar();
 }

 function reset() {
    /// resetting the cnavas
 }

 function init() {
     canvas = document.getElementById('canvas');
     ctx = canvas.getContext('2d');
     w = WIDTH/cols;
     h = HEIGHT/rows;
    //  return setInterval(draw,1000); ///continuous draw
     draw();
    //  setInterval(solveAStar,100);
 }

 function myDown(e) { // wall with mouse

 }

 init();

 canvas.onmousedown = myDown; // wall with mouse 

//  console.log(grid);

function Clear() {
    clear();
    
    draw();
    // for(var i = 0; i< cols ; i++) {
    //     for(var j = 0; j < rows; j++) {
    //         createNode(grid[i][j].x,grid[i][j].y,'e');
    //     }
    // }
} 

function CreateWall() {
    for(var i = 0; i< cols ; i++) {
        for(var j = 0; j < rows; j++) {
             if(grid[i][j].state != 's' && grid[i][j].state != 'f') {
                  if (Math.random(1) < 0.23) {
                      grid[i][j].state = 'w';
                      grid[i][j].isWall = true;
                  }
          }
    }
   }

   for(var i = 0; i< cols ; i++) {
    for(var j = 0; j < rows; j++) {
        createNode(grid[i][j].x,grid[i][j].y,grid[i][j].state);
    }
}
}


///////////////////////////////////////////////////////////////////
// function anotherTest() {
   
//     for(var i = 0; i< cols ; i++) {
//         for(var j = 0; j < rows; j++) {

//         if(grid[i][j].state != 's' && grid[i][j].state != 'w' && grid[i][j].state !="f") {
//             grid[i][j].state = 'n';
//             createNode(grid[i][j].x,grid[i][j].y,grid[i][j].state);
        
//             }
            
//         }
//     }
// }

// anotherTest();



 
 
