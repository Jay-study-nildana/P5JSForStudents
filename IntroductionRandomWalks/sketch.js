// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let walker;
let colormaxnumber;
let countOfDraw;
let colorSwitch;

//value constants.

//https://www.w3schools.com/colors/colors_picker.asp
// #ff3399
// rgb(255, 51, 153)
// hsl(330, 100%, 60%)  
//mom picked this color

let bg_color_x = 255;
let bg_color_y = 51;
let bg_color_z = 153;

// #3333cc
// rgb(51, 51, 204)
// hsl(240, 60%, 50%) 

let stroke_color_x = 51;
let stroke_color_y = 51;
let stroke_color_z = 204;
let stroke_weight = 10;

//this has to be 4. We have four directions.
//any other number, the art will keep going in one specific direction. 
//https://stackoverflow.com/questions/69437751/p5-js-random-walk-always-ends-up-on-the-top-border/69438015#69438015
let random_number_for_walking = 4;

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
  colorSwitch = 5
  colorSwitchFPSCount = 60 * colorSwitch;
}


// function setup() {
//   var cnv = createCanvas(windowWidth, windowHeight);
//   cnv.style('display', 'block');
//   background(255, 0, 200);
// }

function draw() {
  walker.step();
  walker.render();

  if (countOfDraw % colorSwitchFPSCount == 0) {
    //every 100th draw we change the color.
    stroke_color_x = random(colormaxnumber);
    stroke_color_y = random(colormaxnumber);
    stroke_color_z = random(colormaxnumber);
  }
  countOfDraw++;
}

class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }

  render() {
    //https://p5js.org/reference/#/p5/stroke
    // strokeWeight(4);
    // stroke(51);    

    stroke(stroke_color_x, stroke_color_y, stroke_color_z);
    strokeWeight(stroke_weight);
    point(this.x, this.y);
  }

  step() {
    var choice = floor(random(random_number_for_walking));
    if (choice === 0) {
      // this.x++;
      this.x = this.x + stroke_weight;
    } else if (choice == 1) {
      // this.x--;
      this.x = this.x - stroke_weight;
    } else if (choice == 2) {
      // this.y++;
      this.y = this.y + stroke_weight;
    } else {
      // this.y--;
      this.y = this.y - stroke_weight;
    }
    this.x = constrain(this.x, 0, width - stroke_weight);
    this.y = constrain(this.y, 0, height - stroke_weight);
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(bg_color_x, bg_color_y, bg_color_z);
}
