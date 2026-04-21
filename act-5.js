let angle = 0;

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(15, 15, 30, 25);

  let msg = "HELLO WORLD";
  textSize(28);
  noStroke();

  for (let i = 0; i < msg.length; i++) {
    let x = 200 + cos(angle + i * 0.5) * 130;
    let y = 200 + sin(angle + i * 0.5) * 60;

    fill(
      map(i, 0, msg.length, 100, 255),
      150,
      map(i, 0, msg.length, 255, 100)
    );

    text(msg[i], x, y);
  }

  angle += 0.02;
}
