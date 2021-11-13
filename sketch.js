var helicopter,helicopterIMG
var human1,human,humanIMG
var ground;
var wall1;
var wall2;
var zombie,zombieIMG


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
  humanIMG = loadImage("human.png")
  zombieIMG = loadImage("zombie.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	helicopter=createSprite(width/2, 200, 10,10);
	helicopter.addImage(helicopterIMG)
	helicopter.scale=0.6

  human.addImage(humanIMG)
  zombie.addImage(zombieIMG)

	ground = createSprite(width/2, height-35, width,10);
	ground.visible = false;

  wall1 = createSprite(10,700,30,height*2)
	wall1.visible = false;

	wall2 = createSprite(10,10,width*2,30)
  wall2.visible = false;

    score = 0

}



function draw() {
  rectMode(CENTER);
  background(0);

  spawnHumans();

  if(keyDown("UP_ARROW")) {
    helicopter.velocityY = -7;
  }

  else if(keyDown("DOWN_ARROW")) {
    helicopter.velocityY = +7
  }
  // else{helicopter.velocityY = 0}

  else if(keyDown("RIGHT_ARROW")) {
    helicopter.velocityX = +7
  }
  // else{helicopter.velocityX = 0}

  else if(keyDown("LEFT_ARROW")) {
    helicopter.velocityX = -7
  }
  // else{helicopter.velocityX = 0}

  else{
    helicopter.velocityX = 0
    helicopter.velocityY = 0
    

  }
  if (ground.x < 0){
    ground.x = ground.width/2;
  }

//helicopter.bounceOff(ground)
//helicopter.bounceOff(wall1)
//helicopter.bounceOff(wall2)


//if(human.isTouching(helicopter)){
  //score = score + 1;
  //human.destroyEach();
 // }

//if(zombie.isTouching(helicopter)){
//  score = score - 1;
// zombie.destroyEach();
//}

  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 650,50);

  drawSprites()
}



function spawnHumans() {
  if (frameCount % 10 === 0) {
    human = new Human(100,600,50,50)
    human.x = Math.random(200,800);    
    human.velocityX = random(-5,5);
    
    human.lifetime = 300;
    human.scale=0.5;
    
  }
}