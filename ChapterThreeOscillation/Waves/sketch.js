// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let startAngle = 0;
let angleVel = 0.23;

//controls the speed of movement
let startAngleIncrement = 0.015;  //0.015 - default
let sizeOfball = 24;  //default to 24

let ballFill;
let ballStroke;
let ballStrokeWeight;
let numberOfBalls;

//for the colors of each ball
let rgbSetFillMovers = [];
let rgbSetStrokeMovers = [];
let stroke_WeightMovers = [];

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  background(bg_color_x, bg_color_y, bg_color_z);

  ballFill = new colorRGBSet();
  ballStroke = new colorRGBSet();
  ballStrokeWeight = random(stroke_Weight);
  startAngleIncrement = 0.005;
  sizeOfball = 24;

  numberOfBalls = 0;

  //let's get an array of colors. number of balls on the screen
  //and hence number of colors required, depends on size of ball

  for (let x = 0; x <= width; x += sizeOfball) {
    numberOfBalls++;
  }
  console.log("Number of Balls on Screen : " + numberOfBalls);

  //lets get the colors now 

  for (var i = 0; i < numberOfBalls; i++) {
    //random color and stuff

    rgbSetStrokeMovers[i] = new colorRGBSet();
    rgbSetFillMovers[i] = new colorRGBSet();
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


  startAngle += startAngleIncrement;
  let angle = startAngle;

  //the color tracker for filling each ball on the screen
  let colortracker = 0;


  // for (let x = 0; x <= width; x += sizeOfball) {
  //   let y = map(sin(angle), -1, 1, 0, height);
  //   // stroke(164);
  //   // fill(255, 50);
  //   // stroke(ballStroke.red, ballStroke.green, ballStroke.blue);
  //   // fill(ballFill.red, ballFill.green, ballFill.blue);
  //   // strokeWeight(ballStrokeWeight);

  //   stroke(rgbSetStrokeMovers[colortracker].red, rgbSetStrokeMovers[colortracker].green, rgbSetStrokeMovers[colortracker].blue);
  //   fill(rgbSetFillMovers[colortracker].red, rgbSetFillMovers[colortracker].green, rgbSetFillMovers[colortracker].blue);
  //   strokeWeight(stroke_WeightMovers[colortracker]);
  //   ellipse(x, y, ellipse_width, ellipse_height);
  //   angle += angleVel;

  //   //increment color tracker
  //   //normally I would simply use the index i of for loop
  //   //but for the wave, the loop is weaponizing x
  //   //so maintaining my own array index
  //   colortracker++;
  // }

  //the follow is about all balls moving at the same speed 

  // displaywave(sizeOfball, angle, colortracker, rgbSetStrokeMovers, rgbSetFillMovers, stroke_WeightMovers);

  // displaywave(sizeOfball + 50, angle + 0.05, colortracker, rgbSetStrokeMovers, rgbSetFillMovers, stroke_WeightMovers);

  // displaywave(sizeOfball + 150, angle + 0.05, colortracker, rgbSetStrokeMovers, rgbSetFillMovers, stroke_WeightMovers);

  //the following is about a different different speed

  displaywaveWithAngleandSpeed(sizeOfball, angle, colortracker, rgbSetStrokeMovers,
    rgbSetFillMovers, stroke_WeightMovers, angleVel);

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(bg_color_x, bg_color_y, bg_color_z);
}
