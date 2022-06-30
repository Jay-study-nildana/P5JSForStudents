// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com



function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  background(bg_color_x, bg_color_y, bg_color_z);
  //in the beginning, the mouse is not yet clicked.
  startDrawing = true;
  // Let's pick an angle 0 to 90 degrees based on the mouse position
  theta = map(200, 0, width, 0, PI / 2);
  lengthOfFirstBranch = height / 3;  //default height / 3
  maxLines = 15;
  animationTracker = 0;
  linelimit = 0;
  //thickness at which drawing starts
  openingTreeThickness = 10;  
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
    if (animationTracker % animationMultiplier == 0) {
      if (linelimit < maxLines) {
        drawTreeWithLineLimit(linelimit);  //draws at bottom center
        //every time we draw, we allow on more line to be drawn.
        //creates an effect of animation.
        linelimit++;
      }
    }
  }

  animationTracker++;
  if (animationTracker > stoppageValue) {
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
