var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var bar1,bar2,bar3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
   
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	bar1 = createSprite(280,600,15,90);
	bar1.shapeColor = color(255,0,0);

	bar2 = createSprite(360,640,180,20);
    bar2.shapeColor = color(255,0,0);

	bar3 = createSprite(450,600,15,90);
	bar3.shapeColor = color(255,0,0);

	engine = Engine.create();
	world = engine.world;

	bar1 = new Bar(300,80,20,100);
	bar2 = new Bar(360,640,150,20);
	bar3 = new Bar(580,80,15,90);

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);

	barBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8, isStatic:true});
	World.add(world, barBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

    

	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  pakageSprite ={
	restitution: 0.7
}

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW)
  {
packageSprite.velocityY = 3;
Matter.Body.setStatic(packageBody,false);
  }
  if (keyCode === UP_ARROW)
  {
packageSprite.velocityY = -3;
Matter.Body.setStatic(packageBody,false);
  }

}



