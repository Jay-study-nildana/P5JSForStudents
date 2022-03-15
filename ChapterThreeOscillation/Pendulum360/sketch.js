// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com


//display stuff
let ballFill;
let ballStroke;
let ballStrokeWeight;

let r;
let theta;
let lengthOfPendulum;

let tracker;

let x = 0;
let y = 0;

let spiralDraw = true;
let leaveTrail = false;

let ellipse_width = 64
let ellipse_height = 64

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  background(bg_color_x, bg_color_y, bg_color_z);

  ballFill = new colorRGBSet();
  ballStroke = new colorRGBSet();
  ballStrokeWeight = random(stroke_Weight);
  lengthOfPendulum = 0.45; //default 0.45

  // Initialize all values
  r = height * lengthOfPendulum;
  theta = 0;

  tracker = 0;

  if (spiralDraw == true) {
    lengthOfPendulum = 0.01; //default 0.45
    leaveTrail = true;
    ellipse_height = 16;
    ellipse_width = 16;
  }

}


function draw() {

  if (leaveTrail == true) {
    //dont update background color
  }
  else {
    background(bg_color_x, bg_color_y, bg_color_z);
  }

  // Translate the origin point to the center of the screen
  translate(width / 2, height / 2);

  r = height * lengthOfPendulum;

  //this will be a complete rotation
  // Convert polar to cartesian
  x = r * cos(theta);
  y = r * sin(theta);

  //oscilation across y axis
  // let x = 0;
  // let y = r * sin(theta);    

  //oscilation across x axis
  // let x = r * cos(theta);
  // let y = 0;  



  display(ballFill, ballStroke, ballStrokeWeight, x, y);

  // Increase the angle over time
  theta += 0.02;

  if (theta % 180.0 == 0.0) {
    ballFill = new colorRGBSet();
    ballStroke = new colorRGBSet();
    ballStrokeWeight = random(stroke_Weight);
  }

  if (tracker % 100 == 0) {
    console.log(tracker)
    console.log(theta)
    ballFill = new colorRGBSet();
    ballStroke = new colorRGBSet();
    ballStrokeWeight = random(stroke_Weight);
  }

  tracker++;
  // x++;
  // y = r * sin(theta);

  if (spiralDraw == true) {
    lengthOfPendulum = lengthOfPendulum + 0.0001;
  }

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(bg_color_x, bg_color_y, bg_color_z);
}
