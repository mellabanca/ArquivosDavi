class Bird extends BaseClass {
    constructor(x,y){
        super(x,y,50,50);
    
        this.image = loadImage("sprites/bird.png");
      this.smoke=loadImage("sprites/smoke.png");
      this.rastro= [];
    }
    display(){

        super.display();
       if(this.body.velocity.x>10&&this.body.position.x>200){
        var position=[this.body.position.x,this.body.position.y];
        this.rastro.push(position); 
       } 
    

       for(var i=0;i<this.rastro.length;i++){
       image(this.smoke,this.rastro[i][0],this.rastro[i][1])     
       }
    }
}