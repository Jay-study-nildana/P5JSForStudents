// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com



let angle;
let position;
let shot = false;

let ball;

let cannonLocationX;
let cannonLocationY;
let cannonLength;
let cannonWidth;
let cannonBirthLocationX;
let cannonBirthLocationY;

//display stuff
let ballFill;
let ballStroke;
let ballStrokeWeight;


function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  background(bg_color_x, bg_color_y, bg_color_z);

  //setting up the ball
  cannonLocationX = 500;
  cannonLocationY = 300;
  cannonLength = 200;
  cannonWidth = cannonLength / 5;
  angle = -PI / 4;
  position = createVector(cannonLocationX, cannonLocationY);
  cannonBirthLocationX = position.x + cannonWidth / 2;
  cannonBirthLocationY = position.y;
  ball = new CannonBall(cannonBirthLocationX, cannonBirthLocationY, cannonWidth);

  ballFill = new colorRGBSet();
  ballStroke = new colorRGBSet();
  ballStrokeWeight = random(stroke_Weight);

}


function draw() {

  if (leaveTrail == true) {
    //dont update background color
  }
  else {
    background(bg_color_x, bg_color_y, bg_color_z);
  }


  push();
  translate(position.x, position.y);
  rotate(angle);
  rect(0, -5, cannonLength, cannonWidth);
  pop();

  if (shot) {
    let gravity = new createVector(0, 0.2);
    ball.applyForce(gravity);
    ball.update();
  }


  //ball.display();
  ball.display(ballFill, ballStroke, ballStrokeWeight);

  if (ball.position.y > height) {
    ball = new CannonBall(cannonBirthLocationX, cannonBirthLocationY, cannonWidth);
    ballFill = new colorRGBSet();
    ballStroke = new colorRGBSet();
    ballStrokeWeight = random(stroke_Weight);  
    shot = false;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    angle += 0.1;
  } else if (keyIsDown(LEFT_ARROW)) {
    angle -= 0.1;
  }
}

function keyPressed() {
  if (key == ' ') {
    shot = true;
    let force = p5.Vector.fromAngle(angle);
    force.mult(10);
    ball.applyForce(force);
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(bg_color_x, bg_color_y, bg_color_z);
}
