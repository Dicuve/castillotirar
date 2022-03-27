const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var launcher;
var slingShot;
var polygon_img;
function preload(){
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(490,300,250,10);
  stand2 = new Stand(1000,200,200,10);
  stand3 = new Stand(790,200,100,10)
 
  //nivel uno
  block1 = new Block(400,275,30,40);
  console.log(block1);
  block2 = new Block(430,275,30,40);
  block3 = new Block(460,275,30,40);
  block4 = new Block(490,275,30,40);
  block5 = new Block(520,275,30,40);
  block6 = new Block(550,275,30,40);
  block7 = new Block(580,275,30,40);
  //nivel dos
  block8 = new Block(430,235,30,40);
  block9 = new Block(460,235,30,40);
  block10 = new Block(490,235,30,40);
  block11 = new Block(520,235,30,40);
  block12 = new Block(550,235,30,40);
  //nivel tres
  block13 = new Block(460,195,30,40);
  block14 = new Block(490,195,30,40);
  block15 = new Block(520,195,30,40);
  //parte superior
  block16 = new Block(490,155,30,40);

  //nueva piramide
  block17 = new Block(771,190,20,30);
  block18 = new Block(790,190,20,30);
  block19 = new Block(810,190,20,30);
  block20 = new Block(780,140,20,30);
  block21 = new Block(800,140,20,30);
  block22 = new Block(790,100,20,30);
  launcher = new Hexagon(200,200,50,50);

  liga = new Catapulta(launcher.body,{x:175,y:250});
  

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  text ("Agarra el hexagono y lanzalo a los botes para tirarlos", 20, 20);
  

  ground.display();
  stand1.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();


  //lanzador
  launcher.display();

  //otra plataforma
  stand3.display();
  fill("blue");
  block17.display();
  block18.display();
  block19.display();
  fill("green");
  block20.display();
  block21.display();
  fill("lime");
  block22.display();
  //liga.display();

}

function mouseDragged(){
      Matter.Body.setPosition(launcher.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  liga.suelta();

}

function keyPressed(){
  if(keyCode === 32){
     liga.attach(launcher.body);
  }
}
