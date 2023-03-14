// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let walker;

let bg_color_x = 255;
let bg_color_y = 51;
let bg_color_z = 153;

let stroke_color_x = 51;
let stroke_color_y = 51;
let stroke_color_z = 204;
let stroke_weight = 10;

let random_number_for_walking = 5;

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');  
  background(bg_color_x, bg_color_y, bg_color_z);

  walker = new Walker();  
}


function draw() {
  walker.step();
  walker.render();
}

class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }

  render() {
   
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
