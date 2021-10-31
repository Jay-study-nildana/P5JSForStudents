let angles = [30, 10, 45, 35, 60, 38, 75, 67];

let canvasx = 720;
let canvasy = 400;
let backgroundcolorofcanvas = 50;
let pieChartFirstValue = 300;


function setup() {
  createCanvas(canvasx, canvasy);
  noStroke();
  noLoop(); // Run once and stop
}

function draw() {
  background(backgroundcolorofcanvas);
  pieChart(pieChartFirstValue, angles);
}

function pieChart(diameter, data) {
  let lastAngle = 0;
  for (let i = 0; i < data.length; i++) {
    let gray = map(i, 0, data.length, 0, 255);
    fill(gray);
    arc(
      width / 2,
      height / 2,
      diameter,
      diameter,
      lastAngle,
      lastAngle + radians(angles[i])
    );
    lastAngle += radians(angles[i]);
  }
}
