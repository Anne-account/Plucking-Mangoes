const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var tree, stone,ground, slingshot;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;

function preload(){
  boy=loadImage("images/boy.png");
  tree=loadImage("images/tree.png");
  }

function setup() {
  createCanvas(1300, 600);
  
	engine = Engine.create();
	world = engine.world;

	stone=new Stone(235,420,30); 

	mango1=new Mango(1100,100,30);
  mango2=new Mango(1170,130,30);
	mango3=new Mango(1010,140,30);
	mango4=new Mango(1000,70,30);
	mango5=new Mango(1100,70,30);
	mango6=new Mango(1000,230,30);
	mango7=new Mango(900,230,40);
	mango8=new Mango(1140,150,40);
	mango9=new Mango(1100,230,40);
	mango10=new Mango(1200,200,40);
	mango11=new Mango(1120,50,40);
	mango12=new Mango(900,160,40);

	ground=new Ground(650,600,1300,20);
	slingshot=new Slingshot(stone.body,{x:235,y:420})
  /*
  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1300,
      height: 600,
      wireframes: false
    }
  });
	
	Engine.run(engine);
  Render.run(render);*/
}

function draw() {

  background(230);

  Engine.update(engine)
  
  image(boy,200,360,200,300);
  image(tree,800,0,500,800);
  
  Engine.update(engine);
  ground.display();

 stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  
  slingshot.display();

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
  detectollision(stone,mango9);
  detectollision(stone,mango10);
  detectollision(stone,mango11);
  detectollision(stone,mango12);

  fill("red")
  text("Press Space to serve",40,20);
}

function mouseDragged()
{
	Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	slingshot.fly();
   
}

function keyPressed() {
	if (keyCode === 32) {
    Body.setPosition(stone.body,{x:235,y:420})
	  slingshot.attach(stone.body);
	}
  }

  function detectollision(lstone,lmango){

  mangoB=lmango.body.position
  stoneB=lstone.body.position
  
  var distance=dist(stoneB.x, stoneB.y, mangoB.x, mangoB.y);
 
  	if(distance<=lmango.r+lstone.r)
    {
  	  Body.setStatic(lmango.body,false);
    }

  } 