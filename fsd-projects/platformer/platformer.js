const { createRef } = require("react");

$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
  createPlatform(200,700,200,10);
  createPlatform(500,600,300,10);
  createPlatform(900,500,200,10);
  createPlatform(600,400,200,10);
  createPlatform(300,300,200,10);
  createPlatform(500,200,200,10);
  createPlatform(200,100,200,10);





    // TODO 3 - Create Collectables
    createCollectable("max", 300, 650);
   createCollectable("diamond", 700, 550);
   createCollectable("steve",1000,450);
   createCollectable("grace" , 600,300);
createCollectable("kennedi" , 550,100);
    
    // TODO 4 - Create Cannons
createCannon("left", 400, 1000);
createCannon("top" , 500 , 1000);
createCannon("bottom" , 1000, 1000);
createCannon("top" , 700 , 1000);


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
