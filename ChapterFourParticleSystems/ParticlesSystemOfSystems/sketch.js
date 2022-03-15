// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com


// Particles are generated each cycle through draw(),
// fall with gravity and fade out over time
// A ParticleSystem object manages a variable size
// list of particles.

// an array of ParticleSystems
let systems = [];
let countOfFrame = 0;
let singleFrame = 60;
let showTextDisplay = true;


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

  for (let i = 0; i < systems.length; i++) {
    systems[i].addParticle();
    systems[i].run();
  }  

  countOfFrame++;

  //log things every seconnd
  //useful for traking variables.
  // if(countOfFrame%singleFrame == 0)
  // {
  //   console.log(`a single frame has passed`);
  // }

  ////log things every ten seconnd
  if(countOfFrame% (singleFrame * 10) == 0)
  {
    console.log(`ten frame has passed`);
    LogValues();
  }  

  // print(n);
}

function LogValues()
{
  console.log(`Number of Systems : ${systems.length}`);
  console.log(`showTextDisplay : ${showTextDisplay}`)
}

function keyPressed() {
  print(keyCode);
}

function mousePressed() {
  systems.push(new ParticleSystem(1, createVector(mouseX, mouseY)));

  //once the user presses the mouse, they know what to do. 
  //dont show the instructions any more. 
  showTextDisplay = false;
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(bg_color_x, bg_color_y, bg_color_z);
}
