var spaceImg, space;
var asteroidImg, asteroid;
var spaceshipImg, spaceship;


function preload(){
  spaceImg = loadImage("download.jpg");
  spaceship = loadImage("clipart4227203.png")
  asteroidImg = loadImage("kisspng-asteroid-sprite-clip-art-asteroid-png-photos-5a77e8ec80cf24.6423515815178078525276.jpg")
}

function setup() {
  createCanvas(600, 600);
  space = createSprite(300,300);
  space.addImage("space",download.jpg);
 space.velocityY = 1;

 spaceship = createImage(300,300)
spaceship.addImage("spaceship",)
spaceship.scale = 0.1

asteroid = createSprite(300,600)
asteroid.scale = 0.1
}

function draw() {
  background(200);

  if(keyDown("RIGHT_ARROW") && spaceship.y >= 300) {
    trex.velocityx = 12;
  }

  if(keyDown("LEFT_ARROW") && spaceship.y >= 300) {
    trex.velocityx = -12;
  }

  if(spaceship.isTouching(asteroid)){
    space.velocityY = 0
  }

  spaceship.velocityY = spaceship.velocityY + 0.8
  
  if(space.y > 400){
      space.y = 300
    }
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: asteroid.addImage("kisspng-asteroid-sprite-clip-art-asteroid-png-photos-5a77e8ec80cf24.6423515815178078525276.jpg");
    }
    drawSprites()
}