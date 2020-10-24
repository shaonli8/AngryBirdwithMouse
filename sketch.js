
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var grounds,world,engine;
var box1,box2,box3,box4,box5;
var pig1,pig2 ;
var log1,log2,log3,log4;
var bird;

function setup() {
  createCanvas(1200,700);
  engine = Engine.create();
  world = engine.world;
  grounds = new Ground(600,690,1200,20)
  box1 = new Box(800,670,70,70)
  box2 = new Box(940,670,70,70)
  pig1 = new Pig(870,670)
  log1 = new Log(870,580,220,PI/2)
  box3 = new Box(800,560,70,70)
  box4 = new Box(940,560,70,70)
  pig2 = new Pig(870,545)
  log2 = new Log(870,500,220,PI/2)
  box5 = new Box(870,450,70,70)
  log3 = new Log(820,410,150,PI/7)
  log4 = new Log(920,410,140,-PI/5)
  bird = new Bird(150,150)
}

function draw() {
  background(0);
  Engine.update(engine);
  grounds.display()
  box1.display()
  box2.display()
  pig1.display()
  log1.display()
  box3.display()
  box4.display()
  pig2.display()
  log2.display()
  box5.display()
  log3.display()
  log4.display()
  bird.display()
}
