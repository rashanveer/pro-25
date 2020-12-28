class Paper {
    constructor(x,y,r){
        var options = {

            restitution :0.3,
            friction : 0.5,
            density:1.2
        }
        this.paper1 = loadImage("paper.png")
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x,this.y,this.r/2,options);
     
        World . add (world,this.body);
    }
    display(){
        image(this.paper1)
        var pos = this.body.position;
        var angle = this.body.angle
        push ();
        translate (pos.x,pos.y)
        
        imageMode(CENTER)
        fill(255)
        image(this.paper1,0,0,this.r,this.r)
      //  ellipse(0,0,this.r, this.r);
      pop ();
    }
}