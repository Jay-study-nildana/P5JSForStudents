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
let leaveTrail = true;

let ellipse_width = 64;
let ellipse_height = 64;

let angle = 0;
let aVelocity = 0.03;

let showOnlyx = true;
let showOnlyy = true;
let showOnlyz = true;

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  background(bg_color_x, bg_color_y, bg_color_z);

}


function draw() {

  if (leaveTrail == true) {
    //dont update background color
  }
  else {
    background(bg_color_x, bg_color_y, bg_color_z);
  }

  let amplitude = width / 2 * 0.9;
  let x = amplitude * sin(angle);
  angle += aVelocity;

  let amplitudey = height/2 * 0.9
  let y = amplitudey * cos(angle);

  translate(width / 2, height / 2);

  if (showOnlyx) {

    //fill(rgbSetFill.red, rgbSetFill.green, rgbSetFill.blue);
    let ballFill = new colorRGBSet();
    let ballStroke = new colorRGBSet();

    stroke(ballStroke.red, ballStroke.green, ballStroke.blue);
    fill(ballFill.red, ballFill.green, ballFill.blue);

    //this is for horizontal
    line(0, 0, x, 0);
    ellipse(x, 0, ellipse_width, ellipse_height);

  }

  if (showOnlyy) {

    //this is for vertical

    let ballFilly = new colorRGBSet();
    let ballStrokey = new colorRGBSet();

    stroke(ballStrokey.red, ballStrokey.green, ballStrokey.blue);
    fill(ballFilly.red, ballFilly.green, ballFilly.blue);

    line(0, 0, 0, y);
    ellipse(0, y, ellipse_width, ellipse_height);

  }

  if (showOnlyz) {
    //this is the circle

    let ballFillyz = new colorRGBSet();
    let ballStrokeyz = new colorRGBSet();

    stroke(ballStrokeyz.red, ballStrokeyz.green, ballStrokeyz.blue);
    fill(ballFillyz.red, ballFillyz.green, ballFillyz.blue);

    line(0, 0, x, y);
    ellipse(x, y, ellipse_width, ellipse_height);
  }

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(bg_color_x, bg_color_y, bg_color_z);
}
