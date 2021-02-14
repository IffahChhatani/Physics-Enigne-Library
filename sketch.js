//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ground;
var box;
function setup() {
  createCanvas(800,400);
  
  // 1. engine is an instance of Engine class defined in matter.js lib
  engine = Engine.create();
 
 //2. 
  world = engine.world;
  
  //object of Box class
  box = new Box(100, 40, 50,50);
  //JSON - JavaScript obj notation  { 'key1': value1, 'key2': value2}
  // options object is used to override the default props of rigid body

  
  //3. create instance of Bodies
  ground = new Ground(400, 300, 800, 20);

  //4. Add body to the World 
  

  console.log(ground);

var ball_options = {
  'restitution': 0.8,
  'friction': 1,
  'density': 1
  //'gravity': 1
  
}

 ball = Bodies.circle(100, 100, 50, ball_options);
 
 World.add(world,ball);

};

function draw() {
  background(255,255,255);

  //5. update Engine
  Engine.update(engine);
  
  ellipseMode(CENTER);
  ellipse(ball.position.x, ball.position.y,40,40);

  box.display();
  ground.display();
}