var box;

function setup() {
  createCanvas(400,400);

  box = createSprite(200,200,30,30);
}

function draw() {
  background(30);

  if(keyDown("UP_ARROW")){
    box.y = box.y-5;
    background("red");
  }

  if(keyDown("DOWN_ARROW")){
    box.y = box.y+5;
    background("orange");
  }

  if(keyDown("LEFT_ARROW")){
    box.x = box.x-5;
    background("yellow");
  }

  if(keyDown("RIGHT_ARROW")){
    box.x = box.x+5;
    background("green");
  }

  drawSprites();
}




