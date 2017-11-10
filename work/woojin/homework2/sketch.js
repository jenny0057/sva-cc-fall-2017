var cat;
var catImg;

function preload() {
  catImg = loadImage("01.png");
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);
  for (var i = 0; i < allSprites.length; i++) {
    allSprites[i].addSpeed(0.1, 90);
    if (allSprites[i].position.y > height) {
      allSprites[i].velocity.y *= -1;
    }
    if (allSprites[i].position.x > width ||
        allSprites[i].position.x < 0) {
      allSprites[i].remove();
    }
  }
  fill(255);
  textSize(10);
  textAlign(LEFT, TOP);
  text("count: " + allSprites.length,
    450, height-20);
  text("Woojin Chung", 100, height-20);
  text("hw02", 10, height-20);
  drawSprites();
}

function mousePressed() {
  var spr = createSprite(width/2, height/2,
    random(10, 50), random(10, 50));
  spr.shapeColor = color(random(255));
  spr.velocity.y = random(3);
  spr.velocity.x = random(-3, 3);
  spr.position.x = mouseX;
  spr.position.y = mouseY;

}
