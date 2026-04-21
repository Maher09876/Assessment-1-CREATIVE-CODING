let state = "flappycube";
let birdY, birdVel;
let pipes = [];
let score = 0;
let highScore = 0; // tracks best score
let pipeTimer = 0;
let gravity = 0.5;
let flapForce = -8;
let pipeSpeed = 3;
let gapSize = 140;

function setup() {
  createCanvas(400, 500);
}

function resetGame() {
  birdY = height / 2;
  birdVel = 0;
  pipes = [];
  score = 0;
  pipeTimer = 0;
}

//DRAW
function draw() {
  if (state == "flappycube") {
    showTitle();
  } else if (state == "playing") {
    runGame();
  } else if (state == "lose") {
    showLose();
  }
}

//TITTLE SCREEN
function showTitle() {
  background(100, 180, 255);
  //ground
  fill(100, 200, 80);
  rect(0, height - 40, width, 40);
  //title
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(50);
  text("FLAPPY CUBE", width / 2, 160);
  fill(0);
  textSize(16);
  text("Tap or press SPACE bar to flap", width / 2, 230);
  text("Avoid the green pipes", width / 2, 250);
  fill(255, 220, 50);
  textSize(20);
  text("Tap / SPACE bar to start", width / 2, 370);
  //show score on game over screen
  if (highScore > 0) {
    fill(255);
    textSize(16);
    text("Best: " + highScore, width / 2, 420);
  }
}

//MAIN GAME
function runGame() {
  background(100, 180, 255);
  //pipes spawn on a timer
  pipeTimer++;
  if (pipeTimer > 90) {
    let topH = random(60, height - gapSize - 100);
    pipes.push({ x: width, topH: topH, passed: false });
    pipeTimer = 0;
  }
  //update & draw pipes
  for (let i = pipes.length - 1; i >= 0; i--) {
    pipes[i].x -= pipeSpeed;
    //top pipe
    fill(80, 180, 80);
    rect(pipes[i].x, 0, 50, pipes[i].topH);
    //bottom pipe
    let botY = pipes[i].topH + gapSize;
    rect(pipes[i].x, botY, 50, height - botY - 40);
    //pipe
    fill(60, 160, 60);
    rect(pipes[i].x - 4, pipes[i].topH - 20, 58, 20);
    rect(pipes[i].x - 4, botY, 58, 20);
    //score
    if (!pipes[i].passed && pipes[i].x + 50 < 80) {
      score++;
      pipes[i].passed = true;
    }
    if (pipes[i].x < -60) {
      pipes.splice(i, 1);
    }
  }
  //player gravity
  birdVel += gravity;
  birdY += birdVel;
  //draw cube
  fill(255, 220, 50);
  stroke(200, 160, 0);
  strokeWeight(2);
  rect(65, birdY - 15, 30, 30, 4);
  //eye
  fill(0);
  noStroke();
  ellipse(88, birdY - 5, 6, 6);
  //ground
  noStroke();
  fill(100, 200, 80);
  rect(0, height - 40, width, 40);
  //score display
  fill(255);
  textAlign(CENTER);
  textSize(28);
  text(score, width / 2, 40);
  // best score in top right corner
  textSize(14);
  textAlign(RIGHT);
  text("Best: " + highScore, width - 10, 25);
  //collision
  if (birdY + 15 >= height - 40 || birdY - 15 <= 0) {
    if (score > highScore) highScore = score; // save high score on death
    state = "lose";
  }
  //pipe collision
  for (let p of pipes) {
    let botY = p.topH + gapSize;
    if (
      80 > p.x && 65 < p.x + 50 &&
      (birdY - 15 < p.topH || birdY + 15 > botY)
    ) {
      if (score > highScore) highScore = score; // save high score on death
      state = "lose";
    }
  }
}

//GAME OVER SCREEN
function showLose() {
  background(100, 180, 255);
  fill(220, 60, 60);
  textAlign(CENTER, CENTER);
  textSize(44);
  text("GAME OVER", width / 2, 160);
  fill(255);
  textSize(22);
  text("Score: " + score, width / 2, 240);
  //show highscore
  if (score >= highScore) {
    fill(255, 220, 50);
    textSize(20);
    text("New Best: " + highScore + "!", width / 2, 280);
  } else {
    fill(200);
    textSize(18);
    text("Best Score: " + highScore, width / 2, 280);
  }
  fill(255, 220, 50);
  textSize(20);
  text("Tap / SPACE bar to try again", width / 2, 360);
}

//KEYBOARD
function keyPressed() {
  if (key == ' ') {
    if (state == "flappycube") {
      resetGame();
      state = "playing";
    } else if (state == "playing") {
      birdVel = flapForce;
    } else if (state == "lose") {
      resetGame();
      state = "flappycube";
    }
  }
}

//MOBILE
function mousePressed() {
  if (state == "flappycube") {
    resetGame();
    state = "playing";
  } else if (state == "playing") {
    birdVel = flapForce;
  } else if (state == "lose") {
    resetGame();
    state = "flappycube";
  }
}
