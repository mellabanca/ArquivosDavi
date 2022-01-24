class Ligacao{
constructor(bodyA,bodyB){
var options={
bodyA:bodyA,
bodyB:bodyB,
stiffness:0.04,
length:10    
}
this.ligacao= Constraint.create(options);
World.add(world,this.ligacao);
}
display(){
var pontoA=this.ligacao.bodyA.position;
var pontoB=this.ligacao.bodyB.position;
strokeWeight(4);
line(pontoA.x,pontoA.y,pontoB.x,pontoB.y);
}
}