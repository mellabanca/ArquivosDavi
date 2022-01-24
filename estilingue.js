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
strokeWeight(4);
//line(pontoA.x,pontoA.y,pontoB.x,pontoB.y);
}

}
}