const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4
var Pig1, Pig2
var Log1, Log2, Log3, Log4
var Bird1


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    ground = new Ground(600,height,1200,20);
    Pig1 = new Pig(810,350)
    Log1 = new Log(810,260,300,PI/2);

    Box3 = new Box(700,240,70,70);
    Box4 = new Box(920,240,70,70);
    Pig2 = new Pig(810, 220);
    Log2 = new Log(810,180,300,PI/2);

    Log3 = new Log(760,120,150,PI/7);
    Log4 = new Log(870,120,150,-PI/7);
    
    Bird1 = new Bird(100,100);

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    Pig1.display();
    Log1.display();
    Box3.display();
    Box4.display();
    Pig2.display();
    Log2.display();
    Log3.display();
    Log4.display();
    Bird1.display();
}
