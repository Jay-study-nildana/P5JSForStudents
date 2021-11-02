// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let bg_color_x = 255;
let bg_color_y = 51;
let bg_color_z = 153;

//the max allowed stroke Weight
let stroke_Weight = 20;

let numberOfMovers = 50;

let mover;
let movers= [];
let rgbSetFillMovers = [];
let rgbSetStrokeMovers = [];
let stroke_WeightMovers = [];
let moverMass = 3;
let massMinimum = 1;
let massMaximum = 5;

let attractor;
let attractorSize = 100;
let attractorGravity = 0.5;

let leaveTrail = false;
let rgbSetFillAttractor;
let rgbSetStrokeAttractor;
let stroke_WeightAttractor;

let rgbSetFillMover;
let rgbSetStrokeMover;
let stroke_WeightMover;

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  background(bg_color_x, bg_color_y, bg_color_z);

  rgbSetFillAttractor = new colorRGBSet();
  rgbSetStrokeAttractor = new colorRGBSet();
  stroke_WeightAttractor = random(stroke_Weight);

  // rgbSetFillMover = new colorRGBSet();
  // rgbSetStrokeMover = new colorRGBSet();
  // stroke_WeightMover = random(stroke_Weight);

  // mover = new Mover(300, 100, moverMass);
  // mover2 = new Mover(600, 300, moverMass);
  attractor = new Attractor(attractorSize,attractorGravity);

  for (var i = 0; i < numberOfMovers; i++) {
    // Initializing many Mover objects, all with random mass (and all starting at 0,0)
    movers[i] = new Mover(random(width / 4,width / 2), random(height / 4,height / 2), random(massMinimum, massMaximum));
    //movers[i] = new Mover(0, 0, random(massMinimum, massMaximum));
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

  // let force = attractor.attract(mover);
  // mover.applyForce(force);
  // mover.update();

  // let force2 = attractor.attract(mover2);
  // mover2.applyForce(force2);
  // mover2.update();  

  // attractor.display();
  // mover.display();
  attractor.display(rgbSetFillAttractor, rgbSetStrokeAttractor, stroke_WeightAttractor);
  // mover.display(rgbSetFillMover, rgbSetStrokeMover, stroke_WeightMover);
  // mover2.display(rgbSetFillMover, rgbSetStrokeMover, stroke_WeightMover);

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
