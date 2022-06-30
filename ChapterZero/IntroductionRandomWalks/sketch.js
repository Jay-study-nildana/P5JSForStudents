// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

//TODO : I am still unsure, how, I could make this run slower or faster. 
//TODO : Can we have multiple walkers?

function setup() {
  // createCanvas(640, 360);
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  background(bg_color_x, bg_color_y, bg_color_z);

  walker = new Walker();

  //set count to zero
  countOfDraw = 0;
  //set color max number
  colormaxnumber = 255;
  //decide when to change stroke color
  colorSwitch = 5;
  FPSMultiplier = 10;
  //decide if you want colors to change at all
  changeColor = true;
  colorSwitchFPSCount = FPSMultiplier * colorSwitch;
  //delay the animation beginning
  delayedStart = 300;
}

function draw() {

  if(delayedStart<0){

    walker.step();
    walker.render();
  
    if (countOfDraw % colorSwitchFPSCount == 0 && changeColor==true) {
      //every 100th draw we change the color.
      stroke_color_x = random(colormaxnumber);
      stroke_color_y = random(colormaxnumber);
      stroke_color_z = random(colormaxnumber);
    }
    countOfDraw++;    
  }

  delayedStart--;

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(bg_color_x, bg_color_y, bg_color_z);
}
