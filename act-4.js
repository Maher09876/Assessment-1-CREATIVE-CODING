function setup() {
  createCanvas(400, 400);
  background(20);
  noLoop();
}

function draw() {
  for (let x = 0; x < width; x += 40) {
    for (let y = 0; y < height; y += 40) {
      let r = random(100, 255);
      let g = random(50, 150);
      let b = random(150, 255);
      fill(r, g, b, 180);
      noStroke();

      let size = random(10, 35);
      let shape = int(random(3));

      if (shape == 0) {
        ellipse(x + 20, y + 20, size, size);
      } else if (shape == 1) {
        rect(x + 10, y + 10, size, size, 4);
      } else {
        triangle(
          x + 20, y + 5,
          x + 5, y + 35,
          x + 35, y + 35
        );
      }
    }
  }
}
