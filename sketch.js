const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particle;
var division =[];
var particles=[particle];
var plinkos = [];
var line;
var gameState="PLAY"
var count=0;

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

 

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }
   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background(0);
  Engine.update(engine)
  text("Score : "+score,20,40);
  fill(255)
  textSize(36)
  text("500",5,550)
  text("500",80,550)
  text("500",160,550)
  text("500",240,550)
  text("500",320,550)
  text("500",400,550)
  text("500",480,550)
  text("500",560,550)
  text("500",640,550)
  text("500",720,550)

  ground.display();
   if(gameState==="end"){
   background("black")
   fill("red")
  textSize(100)
   text("Game Over",200,400)
}
 
  
 
  for (var i = 0; i < plinkos.length; i++){
    plinkos[i].display();
  }
   if(particles!=null){
     particles.display
       if(particles.body.position.y>700)
            {
          if(  .body.position.x>300){
          score=score+500
          particles=null
          if(count>=5)gameState="end"
        }

    else if(particles.body.position.x<600&& particle.body.position.x>301){
    score=score+100 
    particles=null
    if(count>=5){gameState="end"
    }
     } 
    else if(particles.body.position.x<600&& particle.body.position.x>601){
    score=score+200 
    particles=null
   if(count>=5)gameState="end"  
   }
  }}
    for (var i=0;i<division.length;i++){
    division[i].display();
}
}


function mousePressed(){
  if(gameState=="end"){
  count++
  particles=new Particle(mouseX,50,10,10)
}
}


   