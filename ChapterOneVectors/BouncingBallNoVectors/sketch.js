// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let bg_color_x = 255;
let bg_color_y = 51;
let bg_color_z = 153;

let ellipse_width = 64
let ellipse_height = 64

let thicknessOfEllipse = 5;
//rgb(0, 102, 255)
let stroke_color_x = 0;
let stroke_color_y = 102;
let stroke_color_z = 255;

// rgb(51, 51, 255)
let stroke_fill_color_x = 51;
let stroke_fill_color_y = 51;
let stroke_fill_color_z = 255;

let stroke_Weight = 2;

let x = 100;
let y = 100;

let xspeed = 5;
let yspeed = 2;

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  // background(bg_color_x, bg_color_y, bg_color_z);
}


function draw() {

  //Uncomment the following to leave a trail behind.
  //updating the background color essentially wipes the slate
  background(bg_color_x, bg_color_y, bg_color_z);

  // Add the current speed to the position.
  //these also control the direction of bounces
  x = x + xspeed;
  y = y + yspeed;

  //if the ball its any of the borders, reverse the direction
  if ((x > width) || (x < 0)) {
    xspeed = xspeed * -1;
  }
  if ((y > height) || (y < 0)) {
    yspeed = yspeed * -1;
  }

  // Display circle at x position
  stroke(stroke_color_x,stroke_color_y,stroke_color_z);
  strokeWeight(stroke_Weight);
  fill(stroke_fill_color_x, stroke_fill_color_y, stroke_fill_color_z);
  ellipse(x, y, ellipse_width, ellipse_height);

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(bg_color_x, bg_color_y, bg_color_z);
}
