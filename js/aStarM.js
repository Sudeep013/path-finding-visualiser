

////////// A* M Implementation /////////////////////////////////////
function solveAStarM() {

    function removeFromArray(arr,elt) {
        for(var i = arr.length -1; i >=0; i-- ) {
            if(arr[i] == elt) {
                arr.splice(i,1);
            }
        }
    }
    
    function heuristic(a,b) {
        // var d = Math.ceil(a.x - b.x) + Math.ceil(a.y - b.y);
        var d = 1;
        var d2 = 1;
        var dx = Math.abs(a.x - b.x);
        var dy = Math.abs(a.y - b.y);
        
        return d * (dx + dy) + (d2 - 2*d) * Math.min(dx,dy);
    }

    this.grid = grid;
     
    openSet.push(Start);
    console.log(openSet);
    // console.log(this.grid);
    

     if(openSet.length > 0) {

       while(openSet.length > 0) {

         var winner = 0;
          for(var i = 0; i < openSet.length; i++) {
            if(openSet[i].f < openSet[winner].f) {
                winner = i;
              }
          }
        // console.log(winner);

        var current = openSet[winner];
        if(current === End) {

            //     for (var i = 0;i < path.length; i++) {
            //         if(path[i].state != 's') {
            //         path[i].state = 'p';
            //         createNode(path[i].x,path[i].y,path[i].state); 
            //         }   
            // }

            //////////////////////////////////////////////////
            function sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
              }
              
              async function delayedPath() {

                for (var i = 0;i < path.length; i++) {
                    if(path[i].state != 's') {
                    path[i].state = 'p';
                    createNode(path[i].x,path[i].y,path[i].state);
                    await sleep(200);
                    }   
                }
              }
              
              delayedPath();
            //////////////////////////////////////////////////
            
            console.log("Done");

            return; // new edited
        }

        // console.log(current,End);

         removeFromArray(openSet,current);
        // console.log(openSet);
         closedSet.push(current);
        // console.log(closedSet);

         var neighbors = current.neighbors;
        // console.log(neighbors);


         for(var i=0; i < neighbors.length; i++) {
            var neighbor = neighbors[i];
            // console.log(neighbor)
                // if(neighbor.state != 's' && neighbor.state != 'w' && neighbor.state !="f") {
                //     neighbor.state = 'n';
                //      createNode(neighbor.x,neighbor.y,neighbor.state);
                // }
           
            

            if(!closedSet.includes(neighbor) && !neighbor.isWall) {
                var tempG = current.g + 1;

                var newPath = false;
                
                if(openSet.includes(neighbor)) {
                    // console.log(neighbor.x,neighbor.y,neighbor.state); 
                    if(tempG < neighbor.g) {
                        neighbor.g = tempG;
                        newPath = true;
                    }
                } else {
                    neighbor.g = tempG;
                    newPath = true;
                    openSet.push(neighbor);

                //     if(openSet.includes(neighbor)) {
                // if(neighbor.state != 's' && neighbor.state != 'w' && neighbor.state !="f") {
                //           neighbor.state = 'n';
                //           createNode(neighbor.x,neighbor.y,neighbor.state);
                //      }
                        
                //   }
                }
                
                if(newPath) {
                neighbor.h = heuristic(neighbor,End);
                neighbor.f = neighbor.g + neighbor.h;
                neighbor.previous  = current;

                    if(neighbor.state != 's' && neighbor.state != 'w' && neighbor.state !="f") {
                              neighbor.state = 'n';
                              createNode(neighbor.x,neighbor.y,neighbor.state);
                    }

                }
                // neighbor.previous.push(current);
                path = [];
                var temp = current;
                path.push(temp);
                // console.log(temp);
                while (temp.previous) {
                    path.push(temp.previous);
                    temp = temp.previous;
                    
                }
                
                
            }
        }
     }

    }else {
        console.log("No path found ");
        return;
     }


 }