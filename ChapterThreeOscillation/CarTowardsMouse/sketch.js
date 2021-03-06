// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com



let angle = 0;
let aVelocity = 0;
let aAcceleration = 0.0001;

let movers = [];
let numberOfMovers = 50;
let massMinimum = 1;
let massMaximum = 5;
let rgbSetFillMovers = [];
let rgbSetStrokeMovers = [];
let stroke_WeightMovers = [];


let attractor;
let attractorSize = 100;
let attractorGravity = 0.5;

let rgbSetFillAttractor;
let rgbSetStrokeAttractor;
let stroke_WeightAttractor;

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  background(bg_color_x, bg_color_y, bg_color_z);


  for (var i = 0; i < numberOfMovers; i++) {
    // Initializing many Mover objects, all with random mass (and all starting at 0,0)
    movers[i] = new Mover();
    //random color and stuff
    rgbSetFillMovers[i] = new colorRGBSet();
    rgbSetStrokeMovers[i] = new colorRGBSet();
    stroke_WeightMovers[i] = random(stroke_Weight);
  }

  mover = new Mover();  
}


function draw() {

  if (leaveTrail == true) {
    //dont update background color
  }
  else {
    background(bg_color_x, bg_color_y, bg_color_z);
  }


  for (let i = 0; i < movers.length; i++) {
    movers[i].update();
    movers[i].checkEdges();
    // movers[i].display();  
    movers[i].display(rgbSetFillMovers[i], rgbSetStrokeMovers[i], stroke_WeightMovers[i]);
  }



}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(bg_color_x, bg_color_y, bg_color_z);
}
