var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var PLAY = 1;
var END = 0;
var gameState = 1;

var particle;
var plinkos = [];
var divisions=[];
var divisionHeight=300;
var score =0;
var count=0;
var particle;
var turn =0;

function setup() {
  createCanvas(400, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

    for (var j = 75; j <=width; j=j+50){
       plinkos.push(new Plinko(j,75));
    }
    for (var j = 50; j <=width-10; j=j+50){ 
       plinkos.push(new Plinko(j,175));
    }
    for (var j = 75; j <=width; j=j+50){
       plinkos.push(new Plinko(j,275));
    }
    for (var j = 50; j <=width-10; j=j+50){
       plinkos.push(new Plinko(j,375));
    }
    for (var k = 0; k <=width; k = k + 80) {
      divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
    }
    for (var k = 0; k <=width; k = k +160){
      divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
    }
    for (var k = 0; k <=width; k = k +240){
      divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
    }
    for (var k = 0; k <=width; k = k +320){
      divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
    }   
}
function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  text("500",30,550);
  text("500",110,550);
  text("100",190,550);
  text("200",270,550);
  text("200",350,550)



  Engine.update(engine);
  ground.display();
   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
   }
  
   
   if (particle != null){
     particle.display();
     console.log(particle.body.position.x,particle.body.position.y);
     if (particle.body.position.y>760){
      if(particle.body.position.x<300){
        score = score+500
        particle=null;
      }
      else if(particle.body.position.x>300 && particle.body.position.x<600){
        score= score+100;
        particle = null;
      }
      else if(particle.body.position.x>600 && particle.body.position.x<900){
        score = score+200
        particle = null;
      }
    }
   }
   for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }
}
function mousePressed(){
  if(gameState !== END){
    count++
    particle = new Particle(mouseX, 10, 10, 10);
  }
}