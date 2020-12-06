const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var wall1,wall2,wall3,wall4,ball1,ball2,ball3,ball4,ball5,ball6,ball7,ball8,ball9;










function preload(){

}



function setup() {

  engine = Engine.create();
	world = engine.world;

  createCanvas(800,400);
  

wall1 = new Wall(400,400,10,300);
wall2 = new Wall(400,400,400,10);
wall3 = new wall(200,400,10,300);
wall4 = new wall(200,400,10,300);

ball1 = new Ball(266,50,20,20);
ball2 = new Ball(532,50,20,20);
ball3 = new Ball(398,50,20,20);


ball4 = new Ball(266,100,20,20);
ball5 = new Ball(532,100,20,20);
ball6 = new Ball(398,100,20,20);


ball7 = new Ball(266,150,20,20);
ball8 = new Ball(532,150,20,20);
ball9 = new Ball(398,150,20,20);

}

function draw() {
  background(255,255,255); 
  
  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();

  ball1.display();
  ball2.display();
  ball3.display();

  ball4.display();
  ball5.display();
  ball6.display();

  ball7.display();
  ball8.display();
  ball9.display();

  drawSprites();

}