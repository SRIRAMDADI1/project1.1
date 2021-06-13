function setup() {
  createCanvas(windowWidth,windowHeight);


  bg = createSprite(windowWidth/2,windowHeight/2)
  bg.scale = 1.5
  bg.addImage(bgs)
  bg.velocityX = -3
  player = createSprite(100,500,0,100)
  player.addAnimation("donkeyKong",plimg)

  coin = createSprite(500,500,0,0)
  coin.addAnimation("donkosaurus",coinimg)
  coin.velocityX = -5
  coin.scale = 0.2

  player.addAnimation("donkeyKing",pj)
  invisground = createSprite(0,600,3000,5)
  invisground.visible = false;
}

function preload(){

  bgs = loadImage("imgs/jungle.jpg")
  coinimg = loadAnimation("imgs/o1.png","imgs/o2.png","imgs/o3.png","imgs/o4.png",)
  pj = loadAnimation("imgs/j1.png","imgs/j2.png","imgs/j3.png","imgs/j4.png","imgs/j5.png","imgs/j6.png","imgs/j7.png","imgs/j8.png",)
  plimg = loadAnimation("imgs/p1.png","imgs/p2.png","imgs/p3.png","imgs/p4.png","imgs/p5.png","imgs/p6.png","imgs/p7.png","imgs/p8.png","imgs/p9.png","imgs/p10.png",)
}

function draw() {
  background(255)

  if(bg.x<625){
    bg.x = 750
  }
  player.velocityY = player.velocityY +1
  player.collide(invisground)
  
  if(keyWentDown("space")&& player.y>=450){
    player.velocityY = -15
    player.changeAnimation("donkeyKing",pj)
  }

  if(keyWentUp("space")){
    player.changeAnimation("donkeyKong",plimg)
  }

  drawSprites();
}
