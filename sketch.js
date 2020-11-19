var monkey, monkey_running;
var banana, bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score;
var ground;
var SurvivalTime = 0;

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(600, 600);

  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
 

  ground = createSprite(400, 350, 900, 10);

  console.log(ground.x);

}


function draw() {
  background(180);

  textSize(20)
  fill("black")
  text("SurvivalTime: " + SurvivalTime, 220, 50);

  SurvivalTime = Math.ceil(frameCount / frameRate());


  if (keyDown("space") && monkey.y > 250) {
    monkey.velocityY = -10;
  }

  monkey.velocityY = monkey.velocityY + 0.8;

       monkey.collide(ground);

  food();

  obstacles();

  bananaGroup = new Group();
  obstacleGroup = new Group();

  drawSprites();

}

function food() {
  if (frameCount % 80 === 0) {
    var banana = createSprite(400, 200, 20, 20);
    banana.y = Math.round(random(120, 200));
    banana.addImage(bananaImage);
    banana.velocityX = -3;
    banana.lifetime = 200;
    banana.scale = 0.1;

    bananaGroup.add(banana);
  }
}

function obstacles() {
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(400, 327, 20, 20);
    obstacle.lifetime = 200;
    obstacle.velocityX = -3;
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;

    obstacleGroup.add(obstacle);

  }
}