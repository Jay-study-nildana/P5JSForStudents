// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com


//display stuff
let ballFill;
let ballStroke;
let ballStrokeWeight;

let lineFill;
let lineStroke;
let lineStrokeWeight;

let r;
let theta;
let lengthOfPendulum;

let tracker;

let x = 0;
let y = 0;

let spiralDraw = true;
let leaveTrail = false;

let ellipse_width = 64;
let ellipse_height = 64;

let angle = 0;
let aVelocity = 0.03;

let showOnlyx = true;
let showOnlyy = true;
let showOnlyz = true;

// An array of objects
let oscillators = [];
let numberOfOscillators = 25;

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  background(bg_color_x, bg_color_y, bg_color_z);

  ballFill = new colorRGBSet();
  ballStroke = new colorRGBSet();
  ballStrokeWeight = random(stroke_Weight);

  lineFill = new colorRGBSet();
  lineStroke = new colorRGBSet();
  lineStrokeWeight = random(stroke_Weight);  

  // Initialize all objects
  for (let i = 0; i < numberOfOscillators; i++) {
    oscillators.push(new Oscillator());
  }

}


function draw() {

  if (leaveTrail == true) {
    //dont update background color
  }
  else {
    background(bg_color_x, bg_color_y, bg_color_z);
  }

  // Run all objects
  for (let i = 0; i < oscillators.length; i++) {
    oscillators[i].oscillate();
    // oscillators[i].display();
    //ball.display(ballFill, ballStroke, ballStrokeWeight);
    oscillators[i].display(ballFill, ballStroke, ballStrokeWeight,
      lineFill, lineStroke, lineStrokeWeight);
  }

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(bg_color_x, bg_color_y, bg_color_z);
}
