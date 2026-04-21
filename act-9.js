let table;
let bars = [];

function preload() {
  table = loadTable('data.csv', 'csv', 'header');
}

function setup() {
  createCanvas(500, 400);

  for (let i = 0; i < table.getRowCount(); i++) {
    bars.push({
      label: table.getString(i, 'country'),
      value: table.getNum(i, 'population')
    });
  }
}

function draw() {
  background(240);
  let maxVal = max(bars.map(b => b.value));
  let barW = width / bars.length;
  textAlign(CENTER);
  noStroke();

  for (let i = 0; i < bars.length; i++) {
    let h = map(bars[i].value, 0, maxVal, 0, height - 60);
    let x = i * barW;

    fill(80, 140, 220);
    rect(x + 5, height - 40 - h, barW - 10, h);

    fill(50);
    textSize(11);
    text(bars[i].label, x + barW / 2, height - 25);

    fill(30);
    textSize(10);
    text(bars[i].value, x + barW / 2, height - 45 - h);
  }
  fill(0);
  textSize(10);
  textAlign(CENTER);
  text("Population by Country", width / 9, 25);
}
