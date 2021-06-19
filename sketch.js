const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world;

var polygon;

var ground;

var base1,base2;

var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13
,block14,block15,block16,block17,block18,block19,block20,block21,block22,block23,block24,block25;

var slingShot;

var backgroundImg;
var bg = "Images/dayImage.jpg";

function preload(){

}

function setup() {
	createCanvas(1000,600);

	engine = Engine.create();
	world = engine.world;

    ground = new Ground(500,700,0,0);

    base1 = new Stand(490,500,237,20);
    base2 = new Stand(800,350,180,20);

    block1 = new Box(580,474,30,30);
    block2 = new Box(549,474,30,30);
    block3 = new Box(518,474,30,30);
    block4 = new Box(487,474,30,30);
    block5 = new Box(456,474,30,30);
    block6 = new Box(425,474,30,30);
    block7 = new Box(394,474,30,30);

    block8 = new Box(549,443,30,30);
    block9 = new Box(518,443,30,30);
    block10 = new Box(487,443,30,30);
    block11 = new Box(456,443,30,30);
    block12 = new Box(425,443,30,30);

    block13 = new Box(518,412,30,30);
    block14 = new Box(487,412,30,30);
    block15 = new Box(456,412,30,30);

    block16 = new Box(487,381,30,30);

    block17 = new Box(857,324,30,30);
    block18 = new Box(826,324,30,30);
    block19 = new Box(795,324,30,30);
    block20 = new Box(764,324,30,30);
    block21 = new Box(733,324,30,30);

    block22 = new Box(826,293,30,30);
    block23 = new Box(795,293,30,30);
    block24 = new Box(764,293,30,30);
  
    block25 = new Box(794,262,30,30);

    polygon = Bodies.circle(120,370,20);
    World.add(world,this.polygon);

    slingShot = new Launcher(this.polygon,{x:120,y:300})

	Engine.run(engine);
  
}

function draw() {
  background("white");

  rectMode(CENTER);

  if(backgroundImg)
        background(backgroundImg);

  fill("yellow");
  strokeWeight(2);
  stroke("orange");
  textSize(15);
  text("Drag the stone and release it, to launch towards the blocks. Press space to get a new shot",220,50);

  ground.display();

  base1.display();
  base2.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();

  fill("red");
  ellipse(polygon.position.x,polygon.position.y,20);

  fill("white");
  slingShot.display();

  getBackgroundImage();

}

function mouseDragged(){

  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});

 }
 
 function mouseReleased(){
 
  slingShot.fly();

 }
 
 function keyPressed(){

  if(keyCode === 32){

      slingShot.attach(this.polygon);

  }

}

async function getBackgroundImage(){

  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
   
  console.log(hour);

  if(hour>=06 && hour<18){

    bg = "Images/dayImage.jpg";
  }
  else{
    bg = "Images/nightImage.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);

}

