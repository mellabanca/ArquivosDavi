var mousevivo, mouse;
var mouse1, mouse2, mouse3, mouse4;

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

  mouse1 = createSprite(100,100,50,50);
  mouse1.shapeColor = "green";
  mouse2 = createSprite(200,100,50,50);
  mouse2.shapeColor = "green";
  mouse3 = createSprite(300,100,50,50);
  mouse3.shapeColor = "green";
  mouse4 = createSprite(400,100,50,50);
  mouse4.shapeColor = "green";
}

function draw() {
  background(255,255,255); 
  mousevivo.x = World.mouseX;
  mousevivo.y = World.mouseY; 

 if(isTouching(mouse3, mousevivo)){
   mousevivo.shapeColor = "yellow";
   mouse3.shapeColor = "yellow";
 }
 else{
   mousevivo.shapeColor = "green";
   mouse3.shapeColor = "green";
 }

  drawSprites();
}

function isTouching(obj1, obj2){
  if( obj1.x - obj2.x < obj2.width/2 + obj1.width/2                                                                                   
    &&obj2.x - obj1.x < obj2.width/2 + obj1.width/2  
    &&obj1.y - obj2.y < obj2.height/2 + obj1.height/2                                                                                   
    &&obj2.y - obj1.y < obj2.height/2 + obj1.height/2  ){
    return true;
  } else {
    return false;
  }
}