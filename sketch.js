
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3,ball;

function preload()
{

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ball = new Ball(200,200,20,20);

	//Create the Bodies Here.

	box1=createSprite(400,650,200,20);

	box1.shapeColor = color(255,0,0,{isStatic:true})
	
	box2=createSprite(510,610,20,100);
	
	box2.shapeColor = color(255,0,0,{isStatic:true})
	
	box3=createSprite(290,610,20,100);
	
	box3.shapeColor = color(255,0,0,{isStatic:true})
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  //Engine.update(Engine);
  
  box1.display();
  box2.display();
  box3.display();

  drawSprites();
 
}



