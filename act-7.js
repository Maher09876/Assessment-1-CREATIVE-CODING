let circles = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(15, 15, 30, 30);
  for (let i = circles.length - 1; i >= 0; i--) {
    let c = circles[i];
    fill(c.r, c.g, c.b, c.alpha);
    noStroke();
    ellipse(c.x, c.y, c.size);
    c.size += 1.5;
    c.alpha -= 3;
    if (c.alpha <= 0) circles.splice(i, 1);
  }
}

function mouseMoved() {
  circles.push({
    x: mouseX,
    y: mouseY,
    size: 10,
    alpha: 200,
    r: random(100, 255),
    g: random(50, 200),
    b: random(150, 255)
  });
}

function mousePressed() {
  for (let i = 0; i < 12; i++) {
    circles.push({
      x: mouseX + random(-40, 40),
      y: mouseY + random(-40, 40),
      size: random(10, 30),
      alpha: 220,
      r: 255,
      g: random(100, 200),
      b: 50
    });
  }
}
