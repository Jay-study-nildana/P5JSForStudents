// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let bg_color_x = 255;
let bg_color_y = 51;
let bg_color_z = 153;

let movers = []
let numberOfMovers = 50;

let ellipseColorsSet = [];
let ellipseStrokeColorsSet = [];
let ellipseStrokeWeight = [];

//the max allowed stroke Weight
let stroke_Weight = 20;

let massMinimum = 2;
let massMaximum = 10;

let windX = 0.01;
let windY = 0;

let gravityX = 0;
let gravityY = 2.0;

let realGravity = false;

let realFriction = false;

let frictionInit = 0.1;
let frictionMult = 0.1;

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  background(bg_color_x, bg_color_y, bg_color_z);
  for (var i = 0; i < numberOfMovers; i++) {
    // Initializing many Mover objects, all with random mass (and all starting at 0,0)
    movers[i] = new Mover(0, 0, random(massMinimum, massMaximum));
    //random color and stuff
    ellipseColorsSet[i] = new colorRGBSet();
    ellipseStrokeColorsSet[i] = new colorRGBSet();
    ellipseStrokeWeight[i] = random(stroke_Weight);
  }
}


function draw() {

  background(bg_color_x, bg_color_y, bg_color_z);

  var wind = new createVector(windX, windY);
  // Make up two forces.
  var gravity = new createVector(gravityX, gravityY);

  //[full] Loop through all objects and apply both forces to each object.
  for (var i = 0; i < movers.length; i++) {
    movers[i].applyForce(wind);

    if (realGravity == true) {
      // float m = movers[i].mass;

      // Scaling gravity by mass to be more accurate

      //     PVector gravity = new PVector(0,0.1*m);      
      let tempMass = movers[i].mass;
      let tempGravity = new createVector(0, gravityY * tempMass);
      gravity = tempGravity;

    }

    if (realFriction == true) {

      var c = frictionInit; //[bold]
      let friction = movers[i].velocity.copy(); //[bold]
      friction.mult(-frictionMult); //[bold]
      friction.normalize(); //[bold]
      friction.mult(c); //[bold]

      // Apply the friction force vector to the object.
      movers[i].applyForce(friction); //[bold]      
    }

    movers[i].applyForce(gravity);
    //[end]
    movers[i].update();
    // movers[i].display();
    movers[i].display(ellipseColorsSet[i], ellipseStrokeColorsSet[i], ellipseStrokeWeight[i]);
    movers[i].checkEdges();
  }

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(bg_color_x, bg_color_y, bg_color_z);
}
