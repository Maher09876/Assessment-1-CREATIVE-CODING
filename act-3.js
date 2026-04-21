let img;

function preload() {
  img = loadImage('ellie.jpg');
}

function setup() {
  createCanvas(400, 400);
  background(200, 0, 0)
}

function draw() {
  drawingContext.save();
  drawingContext.beginPath();
  drawingContext.arc(200, 180, 100, 0, TWO_PI);
  drawingContext.clip();
  image(img, 100, 80, 200, 200);
  drawingContext.restore();
  fill(255, 180, 0, 180);
  rect(80, 300, 240, 50, 12);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(18);
  text("Ellie", 200, 325);
  noStroke();
  for (let i = 0; i < 40; i++) {
    fill(random(100, 200), random(100, 200), 255, 18);
    ellipse(random(50, 150), random(50, 150), random(30, 80), random(30, 80));
  }
}
