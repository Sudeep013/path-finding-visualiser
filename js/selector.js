let visualize = document.querySelector('.visualize');
let euc = document.querySelector('.euc');
let man = document.querySelector('.man');
let clean = document.querySelector('.clr');
let dij = document.querySelector('.dij');

visualize.addEventListener("click",CreateWall);
euc.addEventListener("click",solveAStar);
man.addEventListener("click",solveAStarM);
dij.addEventListener("click",solveDijkstra);
clean.addEventListener("click",Clear);