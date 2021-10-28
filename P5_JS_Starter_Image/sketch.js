let canvasx = 2400;
let canvasy = 1158;
let backgroundcolorofcanvas = 0;
let img;
function preload() {
  img = loadImage('cyberpunkbuilding.jpg');
}
function setup() {
  createCanvas(canvasx, canvasy);  
  image(img, 0, 0);
}

function draw(){
  //this will paint over the image.
  // background(backgroundcolorofcanvas);
}