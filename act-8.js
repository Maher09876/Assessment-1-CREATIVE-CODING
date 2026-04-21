let mic, fft;

function setup() {
  createCanvas(400, 400);
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT(0.8, 16);
  fft.setInput(mic);
}

function draw() {
  background(0)
  let spectrum = fft.analyze();
  for (let i = 0; i < 10; i++) {
    let x = map(i, 0, 10, 0, width);
    let h = map(spectrum[i], 0, 255, 0, 200);
    fill(255, 0, 0);
    noStroke();
    rect(x, height - h, 35, h);
  }
}
