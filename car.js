function setup() {
  createCanvas(400, 400);
  background(100, 245, 255);
}

function draw() {
  //road
  fill(80);
  rect(0, 300, 400, 100);
  //car
  fill(220, 50, 50);
  rect(80, 240, 200, 60);
  //roof
  fill(180, 30, 30);
  rect(120, 200, 120, 45);
  //wheels
  fill(30);
  circle(130, 305, 50);
  circle(250, 305, 50);
  
  fill(150);
  circle(130, 305, 20);
  circle(250, 305, 20);
  //window
  fill(173, 216, 230);
  rect(128, 208, 50, 30);
  rect(185, 208, 50, 30);
  //headlight
  fill(255, 255, 150);
  rect(272, 255, 15, 10);
}
