class   Poly
{
    constructor(x,y,r) 
    {
    var  options ={
        restitution:0.8,
        friction:1,
        density:1,
       
        
    }

    this.image=loadImage("polygon.png")

this.r=r;

this.body=Bodies.circle(x,y,r,options);
World.add(world,this.body)
}
display(){
    var pos=this.body.position;
    var angle=this.body.angle
    push ()
    translate(pos.x,pos.y)
    rotate(angle)
    imageMode(CENTER)
    
    image(this.image,0,0,this.r ,this.r)
   pop()
}
}

        
        
    