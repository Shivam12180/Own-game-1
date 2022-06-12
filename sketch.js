var bg,bgImg;



function preload(){
  bgImg = loadImage("bg.jpg");
}

function setup(){
  createCanvas (1200,600);
  bg = createSprite(600,300,1200,600);
  bg.X = bg.width/2
  bg.addImage("bgImg",bgImg);
  bg.scale = 0.65;
  bg.velocityX = -3
}

function draw(){
background (0);

if(bg.X <600){
  bg.X = bg.width/2;
}
drawSprites();
}