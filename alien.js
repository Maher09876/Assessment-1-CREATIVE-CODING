function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  //body
  fill(50, 200, 100);
  ellipse(200, 250, 100, 130);
  //head
  fill(50, 220, 110);
  ellipse(200, 160, 120, 110);
  //eyes
  fill(255);
  ellipse(175, 150, 35, 40);
  ellipse(225, 150, 35, 40);
  
  fill(0);
  ellipse(175, 150, 15, 18);
  ellipse(225, 150, 15, 18);
  //mouth
  noFill();
  stroke(0, 255, 100);
  strokeWeight(2);
  arc(200, 180, 50, 20, 0, PI);
  noStroke();
  //antenna
  stroke(0, 200, 100);
  strokeWeight(3);
  line(185, 110, 165, 75);
  line(215, 110, 235, 75);
  fill(255, 255, 0);
  noStroke();
  circle(165, 72, 12);
  circle(235, 72, 12);
  //arm
  stroke(50, 200, 100);
  strokeWeight(8);
  line(155, 240, 110, 280);
  line(245, 240, 290, 280);
  noStroke();
}
