const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21
var g1,g2
var pol
var sling
function setup() {
  createCanvas(800,1000);
  stroke(255)
  engine = Engine.create();
  world = engine.world;

  g1=new Ground(280,500,290,20)
  g2=new Ground(600,400,300,20)
  //1bottom
  box1=new Box (175,466,50,50)
  box2=new Box (227,466,50,50)
  box3=new Box (279,466,50,50)
  box4=new Box (330,466,50,50)
  box5=new Box (380,466,50,50)
  //1mid
  box6=new Box (200,415,50,50)
  box7=new Box (250,415,50,50)
  box8=new Box (300,415,50,50)
  box9=new Box (350,415,50,50)
  //1mid2
  box10=new Box (250,365,50,50)
  box11=new Box (300,365,50,50)
  //1top
  box12=new Box (275,315,50,50)
  //2bottom
  box13=new Box (500,365,50,50)
  box14=new Box (550,365,50,50)
  box15=new Box (600,365,50,50)
  box16=new Box (650,365,50,50)
  box17=new Box (700,365,50,50)
  //2mid
  box18=new Box (550,315,50,50)
  box19=new Box (600,315,50,50)
  box20=new Box (650,315,50,50)
  //2mid1
  box21=new Box (600,265,50,50)

  pol=new Poly(50,400,50)

sling=new SlingShot(pol.body,{x:50,y:400})

  
Engine.run(engine);
  

}

function draw() {
 
  background(0);  
 
  g1.display()
  g2.display()
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  box17.display()
  box18.display()
  box19.display()
  box20.display()
  box21.display()
  pol.display()
  sling.display()
  
  
  
 
  

}

function mouseDragged(){
	
  Matter.Body.setPosition(pol.body, {x: mouseX , y: mouseY});
}



function mouseReleased(){
  sling.fly();

  
}