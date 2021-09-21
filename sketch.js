var play=1
var end=0
var gamestate=play
var alien_1;
var fruit_1,fruit_2,fruit_3,fruit_4;
var gameOver,gameOverSound;
var Sword_image,sword,swordSound;
var fruitGroup,enemyGroup;
var score=0;

function preload(){
  alien_1=loadImage("alien2.png")
  fruit_1=loadImage("fruit1.png")
  fruit_2=loadImage("fruit2.png")
  fruit_3=loadImage("fruit3.png")
  fruit_4=loadImage("fruit4.png")
  gameOver=loadImage("gameover.png")
  Sword_image=loadImage("sword.png")
  swordSound=loadSound("knifeSwooshSound.mp3")
  gameOverSound=loadSound("gameover.mp3")
}

function setup(){
  createCanvas(windowWidth,windowHeight)
  

 
  sword=createSprite(200,200,10,10)
  sword.addImage(Sword_image)
  
  fruitGroup= new Group()
  enemyGroup=new Group()
}

function draw(){
  background("lightblue");
  
  
  if (gamestate===play){
    sword.x=mouseX;
  sword.y=mouseY;
  
  createfruit()
  alein()
    
    if (fruitGroup.isTouching(sword)){
    fruitGroup.destroyEach()
      swordSound.play()
      score=score+2;
  }
   if (score=4){
   fruitGroup.velocityX=fruitGroup.velocity+2;
}
    
    
   if (enemyGroup.isTouching(sword)){
    sword.addImage(gameOver);
    gamestate=end
    gameOverSound.play()
  }
    
  }
  else if (gamestate===end){
    sword.x=width/2;
    sword.y=height/2;
    sword.scale=5
    enemyGroup.setVelocityXEach(0);
    fruitGroup.setVelocityXEach(0);
    fruitGroup.destroyEach()
    enemyGroup.destroyEach()
  }
  

  
drawSprites();
}
function createfruit(){

  if (frameCount%100===0){
  fruit=createSprite(width,Math.round(random(50,height)))
  fruit.velocityX=-5
  var rand=Math.round(random(1,4))
  
switch(rand){
    case 1 :fruit.addImage(fruit_1) 
    break
    case 2 :fruit.addImage(fruit_2)
    break
    case 3 :fruit.addImage(fruit_3) 
    break
    case 4 :fruit.addImage(fruit_4)
    break
}
    fruit.scale=0.25
    fruitGroup.add(fruit)
  }
 
}

  function alein(){
    if (frameCount%150===0){
      enemy=createSprite(width,Math.round(random(50,height)),30,30);
      enemy.addImage(alien_1)
      enemy.velocityX=-5;
      enemyGroup.add(enemy);
      enemy.setLifetime=50;
      enemy.velocityX= -(8+(score/10));
      
    }
  }
  