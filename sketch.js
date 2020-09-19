var fixedRect, movingRect;
var gameObject1

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
gameObject1=createSprite(400,100,50,80);
gameObject1.shapeColor="green";

  movingRect.velocityY = -5;
  gameObject1.velocityY = +5;
}
function draw(){

  bounceOff(movingRect,gameObject1)
  drawSprites();
}
function bounceOff(object1,object2) {
  background(0,0,0);  

  if (object2.x - object1.x < object1.width/2 + object2.width/2
      && object1.x - object2.x < object1.width/2 + object2.width/2) {
    object1.shapeColor="red"
    object2.shapeColor="red"
  }
  if (object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2){
      object1.shapeColor="blue"
      object2.shapeColor="blue"
  }
}