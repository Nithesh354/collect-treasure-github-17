var PLAY=1
var END=0
var GameState=PLAY

var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg,rubyImg;
var treasureCollection = 0;
var cool
var cashG,diamondsG,jwelleryG,swordGroup,rubyGroup;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("runner1.png","runner2.png");
  cashImg = loadImage("cash.png");
  rubyImg=loadImage("ruby.png")
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg =loadImage("gameOver.png");
}

function setup(){
  
  createCanvas(400,400);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
  
cool=createSprite(200,200,10,10)
  cool.addImage("pong",endImg)
  cool.scale=0.5
//creating boy running
boy = createSprite(70,330,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
boy.setCollider("circle",70,330,160)

  cool.visible=false
  
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();
  rubyGroup=new Group();

}

function draw() {

  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
    createRuby();
    createCash();
    createDiamonds();
    createJwellery();
    createSword();
 
    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection+=300
    }
   else if (rubyGroup.isTouching(boy)) {
      rubyGroup.destroyEach();
      treasureCollection+=200
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasureCollection+=500
      
    }else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      treasureCollection+=1000
      
    }else{
      if(swordGroup.isTouching(boy)) {
        gameState=END
        treasureCollection-=700
        swordGroup.destroyEach();
         rubyGroup.destroyEach();
         jwelleryG.destroyEach();
         diamondsG.destroyEach();
         cashG.destroyEach();
        cool.visible=true
    }
  }

  drawSprites();
  textSize(20);
  fill("red");
  text("Treasure: "+ treasureCollection,150,30);

}

function createCash() {
  if (World.frameCount % 750 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 2;
  cash.lifetime = 150;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 400 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 5;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 600 == 0) {
  var jwellery = createSprite(Math.round(random(50, 350),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 4;
  jwellery.lifetime = 150;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 100 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 6;
  sword.lifetime = 150;
  swordGroup.add(sword);
  }
}

function createRuby(){
  if(World.frameCount % 100===0){
    var ruby=createSprite(Math.round(random(50,350),40,10,10))
    ruby.addImage(rubyImg)
    ruby.scale=0.07
    ruby.velocityY=9
    ruby.lifetime=150
    rubyGroup.add(ruby)
    
  }
}