const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,pig1,log1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(300,300,70,70);
    box2 = new Box(500,300,70,70);
    ground = new Ground(600,height,1200,20)
    pig1 = new PigClass(400,300);
    log1=new LogClass(400,200,300,PI/2);
    
    box3 = new Box(300,150,70,70);
    box4 = new Box(500,150,70,70);
    pig2 = new PigClass(400,150);
    log2 = new LogClass(400,100,300,PI/2);
}

function draw(){
    background(0);
    Engine.update(engine);
   // console.log(box2.body.position.x);
  //  console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();
}