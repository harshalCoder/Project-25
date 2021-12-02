
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var angle=60;

var ground;

var con;

var con2;

var ball,ball2;

var btn1;
var btn2;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
  
  }

  var ball2_options = {
    restitution: 0.95,
  }
   
  var ground_options ={
    isStatic: true
  };
  ground = Bodies.rectangle(0,400,400,20,ground_options);
 World.add(world,ground); 
  btn2 = createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);  
 

  ball = Bodies.circle(200,200,20,ball_options);
  World.add(world,ball);

  ball2 = Bodies.circle(200,200,20,ball2_options);
  World.add(world,ball2);

  con = Matter.Constraint.create({
    pointA:{x:200,y:20},
    bodyB:ball,
    pointB:{x:0,y:0},
    length:100,
    stiffness:0.08 
    
  })
  World.add(world,con);

  //2nd constraint
  con2 = Matter.Constraint.create({
    bodyA:ball,
    pointA:{x:0,y:0},
    bodyB:ball2,
    pointB:{x:0,y:0},
    length:100,
    stiffness:0.08 
    
  })
  World.add(world,con2);

    rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  
  ellipse(ball.position.x,ball.position.y,10);
  ellipse(ball2.position.x,ball2.position.y,20);
   rect(ground.position.x,ground.position.y,750,20);

  push();
  strokeWeight(2);
  stroke(255);
  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
  line(ball.pointA.x,ball.pointA.y,ball2.position.x,ball2.position.y);
  pop();

  
    
  Engine.update(engine);
}


function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}
  


