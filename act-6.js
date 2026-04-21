let trail = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(10, 10, 20, 40);
  trail.push({ x: mouseX, y: mouseY });
  if (trail.length > 60) {
    trail.shift();
  }
  noFill();
  for (let i = 1; i < trail.length; i++) {
    let alpha = map(i, 0, trail.length, 0, 255);
    let size = map(i, 0, trail.length, 2, 14);
    stroke(
      map(i, 0, trail.length, 100, 255),
      100,
      map(i, 0, trail.length, 255, 100),
      alpha
    );
    strokeWeight(size);
    line(trail[i - 1].x, trail[i - 1].y, trail[i].x, trail[i].y);
  }
}
