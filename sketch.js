

var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage, bananaGroup;
var FoodGroup, obstacleGroup;
var score;
var ground;
var PLAY;
var gameState=PLAY;
var jungle,jungleImage;

var survivalTime=0;
 
function preload(){
  
  
  monkey_running =            loadAnimation("Monkey_01.png", "Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");
 jungleImage=loadImage("jungle.jpg");
}



function setup() {
  jungle = createSprite(200,200);
  jungle.addImage(jungleImage);
 jungle.velocityX=-2;
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running );
  monkey.scale=0.1;

  
  ground = createSprite(400,370,900,10);
  //ground.addImage("ground",groundImage);
 
  
  
  bananaGroup=new Group();
}


function draw() {
background(0);
   ground.visible=false;
    if (jungle.x < 0){
      jungle.x = jungle.width/2;
    }
  if(bananaGroup.isTouching(monkey)){
    survivalTime=survivalTime+2;
    bananaGroup.destroyEach();
    switch(score){
      case 10: monkey.scale=0.12;
        break;
        case 20: monkey.scale=0.14;
        break;
        case 30: monkey.scale=0.16;
        break;
        case 40: monkey.scale=0.18;
        break;
        default: break;
    }
  }
  
  monkey.collide(ground);
  ground.velocityX=-4;
   ground.x = ground.width /2;
  //jungle.velocityX=-1;
  //jungle.x = jungle.width /2;
  if (gameState===PLAY){
  if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -12;
       
  }
       monkey.velocityY = monkey.velocityY + 0.8

    
    }
  
  
  food();
  spawnObstacles();
  drawSprites();
  stroke("white");
  textSize(20);
  fill("white");
  text("Survival Time: " + survivalTime,125,50);
  
  stroke("white");
  textSize(20);
  fill("white");
  survivalTime=Math.ceil(frameCount/frameRate())
   
  text("Survival Time: " + survivalTime,125,50);
  
}


function food(){
  if(World.frameCount%80===0){
    banana=createSprite(400,200,20,20);
    banana.y = Math.round(random(120,200));
     banana.addImage(bananaImage);
    banana.scale=0.05;
    banana.velocityX=-3;
    banana.lifetime=138;
   
    bananaGroup.add(banana);
    
}
  
}

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(400,350,10,40);
    //obstacle.debug = true;
    obstacle.velocityX = -4;
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.1;
    
  }
}

























// var monkey, monkeyImage;
// var obstacele, obstacleGroup, obstacleImage;
// var background1, backgroundImage;
// var score;

// function preload(){
//   backgroundImage=loadImage("jungle.jpg");
//   monkeyImage=loadImage("Monkey_01.png", "Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");



// bananaImage=loadImage("banana.png");
// obstacleImage=loadImage("stone.png");
// }



// function setup() {
//   createCanvas(400, 400);
//   monkey=createSprite(200,200);
// }

// function draw() {
//   background(220);
//   drawSprites();
// }