var happyDog,Dog;
var database,foodS,foodStock;

function preload()
{
  DogOp=loadImage("Dog.png");
  DogHappy=loadImage("happydog.png");
}

function setup() {
  createCanvas(500, 500);
  
  database=firebase.database();

  Dog.createSprite(225,225,30,40);

}


function draw() {  
background(46,139,87)
  drawSprites();
  //add styles here
}



