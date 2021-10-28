// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let bg_color_x = 255;
let bg_color_y = 51;
let bg_color_z = 153;

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  background(bg_color_x, bg_color_y, bg_color_z);
}


function draw() {

  //Snake One

  let x = returnCoOrdinate(xoff,'width')
  let y = returnCoOrdinate(yoff,'height')
  // With each cycle, increment xoff
  xoff += xincrement;
  yoff += yincrement;    

  //the following will give a nice snake style random moving across
  //the entire view
  drawEllipse(x,y,ellipse_width,ellipse_height,true);
  //the following will move across the x axis because height is constant
  // drawEllipse(x,height/2,ellipse_width,ellipse_height,true);
  //the following will move across the y axis because width is constant
  // drawEllipse(width/2,y,ellipse_width,ellipse_height,true);

  //Snake Two 
  //TODO - can we modularize this so we can just pick number of snakes

  let x2 = returnCoOrdinate(xoff2,'width')
  let y2 = returnCoOrdinate(yoff2,'height')
  // With each cycle, increment xoff
  xoff2 += xincrement2;
  yoff2 += yincrement2;    

  //the following will give a nice snake style random moving across
  //the entire view
  drawEllipse(x2,y2,ellipse_width,ellipse_height,true);  

  // print(n);
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(bg_color_x, bg_color_y, bg_color_z);
}
