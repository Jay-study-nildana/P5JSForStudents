// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com



let angle = 0;
let aVelocity = 0;
let aAcceleration = 0.0001;

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


  translate(width / 2, height / 2);
  rotate(angle);

  let rgbSetStroke = new colorRGBSet();
  let tempStrokeWeight = random(stroke_Weight);
  let rgbSetFill = new colorRGBSet();

  stroke(rgbSetStroke.red, rgbSetStroke.green, rgbSetStroke.blue);
  strokeWeight(tempStrokeWeight);
  fill(rgbSetFill.red, rgbSetFill.green, rgbSetFill.blue);  

  let lineEndPoint = 600;
  let ellipseRadius = 64;

  line(-lineEndPoint, 0, lineEndPoint, 0);
  ellipse(lineEndPoint, 0, ellipseRadius, ellipseRadius);
  ellipse(-lineEndPoint, 0, ellipseRadius, ellipseRadius);  

  angle += aVelocity;
  aVelocity += aAcceleration;  

  // print(n);
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(bg_color_x, bg_color_y, bg_color_z);
}
