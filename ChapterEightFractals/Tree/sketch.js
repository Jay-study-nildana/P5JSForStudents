// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let theta;  //decides the angle of the branch
let startDrawing; //decide to start drawing only after the mouse click.
let lengthOfFirstBranch; //not used.
let linelimit; //number of lines to draw with each call
let animationTracker; //decide how frequently the animation updates.
let maxLines; //the point at which you want the lines to stop. avoids over crowding of lines on the animation.
let openingTreeThickness;
let reductionOfLength; //default is 0.66
let reductionOfThickness; //default is 0.66

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  background(bg_color_x, bg_color_y, bg_color_z);
  //in the beginning, the mouse is not yet clicked.
  startDrawing = false;
  theta = 0;
  lengthOfFirstBranch = height / 3;  //default height / 3
  maxLines = 15;
  animationTracker = 0;
  linelimit = 0;
  openingTreeThickness = 30;  //thickness at which drawing starts
  reductionOfLength = 0.66;
  reductionOfThickness = 0.88;

}


function draw() {

  if (leaveTrail == true) {
    //dont update background color
  }
  else {
    background(bg_color_x, bg_color_y, bg_color_z);
  }

  if (startDrawing == true) {
    //only draw if the mouse has been clicked.
    // drawTree();
    //draw a new tree every 60 frames.
    //change this to 30 if you want.
    //stop once you have drawn the maximum lines allowed
    if (animationTracker % 30 == 0) {
      if (linelimit < maxLines) {
        drawTreeWithLineLimit(linelimit);  //draws at bottom center
        //every time we draw, we allow on more line to be drawn.
        //creates an effect of animation.
        linelimit++;
      }
    }
  }

  animationTracker++;
  if (animationTracker > 6000) {
    animationTracker = 0;
  }

  // print(n);
}

function mousePressed() {
  console.log("mouse press begins");
  // newTree();
  //redraw();
  //drawTree();
  //clear the screen so that previous drawing is wiped out
  background(bg_color_x, bg_color_y, bg_color_z);
  //get X on which theta depends.
  print("mouse clicked: X : " + mouseX + " Y : " + mouseY);
  // Let's pick an angle 0 to 90 degrees based on the mouse position
  theta = map(mouseX, 0, width, 0, PI / 2);
  print("theta : " + theta);
  startDrawing = true;
  //reset number of lines to zero
  linelimit = 0;
  // animationTracker = 0;
  console.log("mouse press ends");
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(bg_color_x, bg_color_y, bg_color_z);
}
