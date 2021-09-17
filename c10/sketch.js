var ground,groundimage
var treximage
var trex
function preload(){
  treximage=loadAnimation("trex1.png","trex2.png","trex3.png")
  groundimage=loadImage("ground2.png")
}
function setup() 
{
  createCanvas(600,200);
  trex = createSprite (50,160,10,100);
  trex.addAnimation ("trexrun",treximage);
  trex.scale = 0.5;
  ground = createSprite(300,190,600,20);
  ground.addImage ("groundmove",groundimage);

}


function draw() 
{
background("white");
ground.velocityX = -2;
if (ground.x<0){
  ground.x = ground.width /2;
}
if (keyDown("space")){
  trex.velocityY = -10;
}
trex.velocityY = trex.velocityY + 0.5;
trex.collide (ground  )
drawSprites ();
}

