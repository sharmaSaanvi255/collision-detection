var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(200, 200, 50, 30);
  fixedRect = createSprite(400, 200, 40, 80);

  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";

  movingRect.velocityX=2;

  movingRect.debug = true;
  fixedRect.debug = true;
}

function draw() {
  background("lightgreen"); 
  
  //movingRect.x = mouseX;
  //movingRect.y = mouseY;

  text(fixedRect.x - movingRect.x, 200, 100);
  text(fixedRect.width/2 + movingRect.width/2, 200, 150);

  if(fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2 &&
    movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2  &&
     fixedRect.y-movingRect.y<= fixedRect.height/2 + movingRect.height/2 && 
     movingRect.y-fixedRect.y<= fixedRect.height/2 + movingRect.height/2){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
    
    movingRect.velocityX=-1*movingRect.velocityX;

    fixedRect.velocityX=-1*fixedRect.velocityX;
  } else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  drawSprites();
}