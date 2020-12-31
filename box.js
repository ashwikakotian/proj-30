class Box{
    constructor(x,y,width,height){

        var options ={
            restitution:0.8,
            friction:1,
            density:1,
            
        }

        this.width= width;
        this.height=height
        this.visiblity=255
        this.body=Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body);
        
    }


    display(){
        var pos= this.body.position;
        var angle= this.body.angle;

        // console.log(this.body.speed)
        if(this.body.speed<3){

        push ()
        translate(pos.x ,pos.y)
        rotate(angle)
        strokeWeight(2);
        stroke("white")
        fill("orange")
        rectMode(CENTER)
        rect(0,0,this.width,this.height);
        pop ()
        
            
        }
        else{ 

            push ()
            translate(pos.x ,pos.y)
            rotate(angle)
            strokeWeight(2);
            stroke("white")
            fill("orange")
            rectMode(CENTER)
            World.remove(world,this.body)
             this.visiblity=this.visiblity-5;
             tint(255,this.visiblity)
            //rect(0,0,this.width,this.height);
            pop ()
            
            
    }

    }
}