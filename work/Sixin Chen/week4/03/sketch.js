
function setup() {
  createCanvas(400, 400);
}


function draw() {
  background(200);

  var redColor = 255;
  //var sizeOfCircle = 100;
  fill(redColor, 0,0);


  //fill(redColor, 0, 0);
  var myVar =0;
  var numOfLoop =300;
  var circleSize = 40;
  for (var i = 0; i < numOfLoop; i++){
     var theta = i * ((Math.PI *2) / numOfLoop) * (mouseY * 0.1)
     var radius = 0.01 * i * mouseX;
     var xPos = Math.cos(theta) * radius + width/2;
     var yPos = Math.sin(theta) * radius + height/2;


fill(30 +i *1, 60, 80);
  ellipse(xPos, yPos, circleSize, circleSize);
  }
}
