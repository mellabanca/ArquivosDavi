class Estilingue{
constructor(bodyA,pointB){
var options={
bodyA:bodyA,
pointB:pointB,
stiffness:0.04,
length:10    
}
this.estilingue1 = loadImage("./sprites/sling1.png");
this.estilingue2 = loadImage("./sprites/sling2.png");
this.estilingue3 = loadImage("./sprites/sling3.png");
this.pointB=pointB
this.estilingue= Constraint.create(options);
World.add(world,this.estilingue);
}
fly(){
this.estilingue.bodyA=null;    
}
display(){
image(this.estilingue1, 200, 20);
image(this.estilingue2, 173, 20);
if(this.estilingue.bodyA){
var pontoA=this.estilingue.bodyA.position;
var pontoB=this.pointB;
push();

stroke(84,39,15);
if(pontoA.x<220){
strokeWeight(7);
line(pontoA.x-20,pontoA.y,pontoB.x-10,pontoB.y);
line(pontoA.x-20,pontoA.y,pontoB.x+30,pontoB.y-3);
image(this.estilingue3,pontoA.x-30,pontoA.y-10,15,30);
}else{
strokeWeight(3);    
line(pontoA.x+25,pontoA.y,pontoB.x-10,pontoB.y);
line(pontoA.x+25,pontoA.y,pontoB.x+30,pontoB.y-3);
image(this.estilingue3,pontoA.x+25,pontoA.y-10,15,30);
}

pop();
//line(pontoA.x,pontoA.y,pontoB.x,pontoB.y);
}

}
}