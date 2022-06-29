// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com



function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  background(bg_color_x, bg_color_y, bg_color_z);

  rgbSetFillAttractor = new colorRGBSet();
  rgbSetStrokeAttractor = new colorRGBSet();
  stroke_WeightAttractor = random(stroke_Weight);

  attractor = new Attractor(attractorSize,attractorGravity);

  for (var i = 0; i < numberOfMovers; i++) {
    // Initializing many Mover objects, all with random mass (and all starting at 0,0)
    movers[i] = new Mover(random(width / 4,width / 2), random(height / 4,height / 2), random(massMinimum, massMaximum));
    //random color and stuff
    rgbSetFillMovers[i] = new colorRGBSet();
    rgbSetStrokeMovers[i] = new colorRGBSet();
    stroke_WeightMovers[i] = random(stroke_Weight);
  }  
}


function draw() {

  if (leaveTrail == true) {
    //dont update background color
  }
  else {
    background(bg_color_x, bg_color_y, bg_color_z);
  }

  //[full] Loop through all objects and apply both forces to each object.
  for (var i = 0; i < movers.length; i++) {

    let force = attractor.attract(movers[i]);
    movers[i].applyForce(force);
    movers[i].update();
    movers[i].display(rgbSetFillMovers[i], rgbSetStrokeMovers[i], stroke_WeightMovers[i]);  
  }  

  attractor.display(rgbSetFillAttractor, rgbSetStrokeAttractor, stroke_WeightAttractor);

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(bg_color_x, bg_color_y, bg_color_z);
}

function mouseMoved() {
  attractor.handleHover(mouseX, mouseY);
}

function mousePressed() {
  attractor.handlePress(mouseX, mouseY);
}

function mouseDragged() {
  attractor.handleHover(mouseX, mouseY);
  attractor.handleDrag(mouseX, mouseY);
}

function mouseReleased() {
  attractor.stopDragging();
}
