// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let bg_color_x = 255;
let bg_color_y = 51;
let bg_color_z = 153;

let thicknessOfEllipse = 5;
//rgb(0, 102, 255)

let x = 100;
let y = 100;

let xspeed = 5;
let yspeed = 2;

let position;
let velocity;

let movers = [];
let numberOfMovers = 200;
let ellipseColorsSet = [];
let ellipseStrokeColorsSet = [];
let ellipseStrokeWeight = [];

let changeColorTrigger = 480;
let changeColorTracker = 0;

//the max allowed stroke Weight
let stroke_Weight = 20;

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  // background(bg_color_x, bg_color_y, bg_color_z);
  // position = createVector(x, y);
  // velocity = createVector(xspeed, yspeed);  

  for (var i = 0; i < numberOfMovers; i++) {
    movers[i] = new Mover();
    ellipseColorsSet[i] = new colorRGBSet();
    ellipseStrokeColorsSet[i] = new colorRGBSet();
    ellipseStrokeWeight[i] = random(stroke_Weight);
  }
}


function draw() {

  //Uncomment the following to leave a trail behind.
  //updating the background color essentially wipes the slate
  background(bg_color_x, bg_color_y, bg_color_z);

  for (let i = 0; i < movers.length; i++) {
    movers[i].update();
    movers[i].display(ellipseColorsSet[i],ellipseStrokeColorsSet[i],ellipseStrokeWeight[i]);
  }

  if(changeColorTracker == changeColorTrigger)
  {
    //empty the current color set
    ellipseColorsSet = [];
    for (var i = 0; i < numberOfMovers; i++) {
      ellipseColorsSet[i] = new colorRGBSet();
      ellipseStrokeColorsSet[i] = new colorRGBSet();
      ellipseStrokeWeight[i] = random(stroke_Weight);
    }    
    //reset the tracker
    changeColorTracker = 0;
  }

  changeColorTracker++;

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(bg_color_x, bg_color_y, bg_color_z);
}
