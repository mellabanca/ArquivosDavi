var mousevivo, mouse;

function setup() {
  createCanvas(800,400);
  mouse = createSprite(200, 200, 50, 80);
  mouse.shapeColor = "green";
  mouse.debug = true;
  mousevivo = createSprite(400,800,80,30);
  mousevivo.shapeColor = "green";
  mousevivo.debug = true;
  console.log(mouse.width/2);
  console.log(mousevivo.width/2);
}

function draw() {
  background(255,255,255); 
  mousevivo.x = World.mouseX;
  mousevivo.y = World.mouseY; 

  if(mousevivo.x - mouse.x < mouse.width/2 + mousevivo.width/2){
    mouse.shapeColor = "red";
    mousevivo.shapeColor = "red";
  } else {
    mouse.shapeColor = "green";
    mousevivo.shapeColor = "green";
  }

  drawSprites();
}