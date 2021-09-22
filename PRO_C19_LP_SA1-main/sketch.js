var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  ghostImg1 = loadImage("ghost-jumping.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  //To make player
  ghost = createSprite(300,400)
  ghost.addAnimation("ghostImg",ghostImg)
  ghost.scale = 0.5
  ghost.velocityY=10
  
  // to make the groups
  climbersGroup=new Group();
  doorsGroup=new Group();}

function draw() {
  background(200);
  //the tower
  if(tower.y > 600){
    tower.y=300
    
  }
  tower.velocityY=5
  if (gameState=="play")
  {
    
    //jump
    if(keyDown("space"))
{
 ghost.velocityY=-20;   
 
}
ghost.velocityY+=2
//ghost move
if(keyDown("right"))
{
ghost.x+=5
}
if(keyDown("left"))
{
ghost.x-=5
}
//to make obstacles spwn slowly
if(frameCount%60==0)
{
 obstacleCreate(); 
}
//to change the gameState to end
if(ghost.isTouching(doorsGroup))
{
 gameState="end" 
}
if (ghost.y>600)
{
  gameState="end"
}
if (ghost.y<0)
{
  gameState="end"
}
}
  
  
  
 
//to loop

    drawSprites();
    fill("black")
    
    if (gameState=="end")
 {
  tower.velocityY=0
  ghost.velocityY=0
  ghost.visible=false
  climbersGroup.destroyEach();
  doorsGroup.destroyEach();
  fill("black")
  text("Press R to restart",300,300)
  if(keyDown("r"))
    {
      reset();
    }
 }
 noMove();
   text(mouseX+","+mouseY,mouseX,mouseY);
    

}
function obstacleCreate()
{
var x=Math.round(random(100,500))

door=createSprite(x,-50)
door.velocityY=5
door.addAnimation("door",doorImg)
climber=createSprite(x,0)
climber.velocityY=5
climber.addAnimation("climber",climberImg)
door.lifetime=500
climber.lifetime=500

doorsGroup.add(door)
climbersGroup.add(climber)
}
function reset() 
{
gameState="play"
ghost.visible=true
ghost.x=300
ghost.y=300
ghost.velocityY=10
}
function noMove()
{

if (ghost.x<100)
{
  ghost.x=101
}
if (ghost.x>500)
{
  ghost.x=499
}
}
