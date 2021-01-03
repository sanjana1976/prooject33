var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particle = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var particle
var fallingparticle
var turn=0
var Gamestate='Play';
var line
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  fill('yellow')
  line(0,100,0,100)
if(Gamestate==='Play'){
   for (var k = 0; k <=width; k = k + 90) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 15, divisionHeight));
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
fallingparticle= new Particle(-100,10,10)

    
  }
    

 


function draw() {
  background('black');
  textSize(20)
 text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();}
 
  //for (var j = 0; j < 5; j++) {
   
    // fallingparticle.display();
   //  particle.addArray(particle)
  

   
  //line.display();
  
 
   if(turn===5){
     Gamestate='end'
     textSize(50)
     stroke('red')
     text("GAMEOVER",280,250)
     textSize(30)
     text("PRESS SPACE TO PLAY AGAIN",200,450)
    }
   
   if(Gamestate==='end'&& keyCode===32){
     Gamestate= 'Play'
     turn=0        
     score=0  
   
    // text("play",200,100)
   }
   if(Gamestate==='Play'){
     keyCode = 33
   }
   if(fallingparticle!==null){
    fallingparticle.display();
   if(fallingparticle.body.position.y>760) {
    if(fallingparticle.body.position.x< 300 &&fallingparticle.body.position.x>10)
   {
     score= score+500
     fallingparticle=null
     
    }
    }}
    if(fallingparticle!==null){
      fallingparticle.display();
    if(fallingparticle.body.position.y>760) {
      if(fallingparticle.body.position.x>301 && fallingparticle.body.position.x<600)
     {
       score= score+100
       fallingparticle=null
       
      }
      }
    
 }
 if(fallingparticle!==null){
  fallingparticle.display();
if(fallingparticle.body.position.y>760) {
  if(fallingparticle.body.position.x>601 && fallingparticle.body.position.x<900)
 {
   score= score+200
   fallingparticle=null
   
  }
  }}
  text(500,30,550);
  text(500,120,550)
  text(500,210,550)
  text(500,300,550)
  text(100,380,550)
  text(100,480,550)
  text(100,580,550)
  text(200,650,550)
  text(200,730,550)



// mousePressed();
}


function mousePressed(){
  if( Gamestate==='Play')
  {     turn= turn+1
text("position",200,200)

fallingparticle= new Particle(mouseX,10,10,10);
fallingparticle.display();

  //  if(turn>= 5)
  //  {
  //    Gamestate==="end"
   // text("GAME OVER",200,200)
  
//}
//}

  }
}