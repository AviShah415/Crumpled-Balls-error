var ground;
var dustbin1, dustbin2, dustbin3;
var ball;
var engine,world;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);



	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow")
	

	engine = Engine.create();
	world = engine.world;


	ball = new Ball(200,450,40);
	
	dustinbin1 = new Dustbin(640,650,200,20)
	dustinbin2 = new Dustbin(730,610, 20, 100)
	dustinbin3 = new Dustbin(530,610,20,100)
	


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	






	 
Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  ball.display()
  
  //dustbin1.display();
  //dustbin2.display();
  //dustbin3.display();
  drawSprites();
 
}




