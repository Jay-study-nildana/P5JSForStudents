//value constants.

//https://www.w3schools.com/colors/colors_picker.asp
// #ff3399
// rgb(255, 51, 153)
// hsl(330, 100%, 60%)  
//mom picked this color

let bg_color_x = 255;
let bg_color_y = 51;
let bg_color_z = 153;

let stroke_color_x = 51;
let stroke_color_y = 51;
let stroke_color_z = 204;
let stroke_weight = 10;

let countOfDraw = 0;
let colormaxnumber = 255;

//default things stop above

//new stuff comes here.

// An array to keep track of how often random numbers are picked

let randomCounts = [];
let totalNumberOfRectangles = 20;
let heightIncreaseOfRectangle = 5;
let drawStopPercentage = 0.75;

function setup() {
  // createCanvas(640, 360);
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  background(bg_color_x, bg_color_y, bg_color_z);

  //default stuff above 

  //in the beginning every rectangle has a height of zero.
  for (let i = 0; i < totalNumberOfRectangles; i++) {
    randomCounts[i] = 0;
  }

}

function draw() {

  //draw as long as the height of the triangles are less than 75 %
  //as the number of rectangles are equally distributed across the entire spectrum
  //so, we want to stop at 75 % of the total rectangles drawn
  if (countOfDraw < height * drawStopPercentage * totalNumberOfRectangles) {
    render();
  }


  countOfDraw = countOfDraw + heightIncreaseOfRectangle;
  console.log("countOfDraw : " + countOfDraw + " height * drawStopPercentage * totalNumberOfRectangles : " + height * drawStopPercentage * totalNumberOfRectangles + " windowHeight: " + windowHeight);

}

function render() {
  //pick the rectangle which will increase in value. 
  let index = floor(random(totalNumberOfRectangles));
  //so, if, the random number is 10, the 10th rectangle will increase by 1
  randomCounts[index] = randomCounts[index] + heightIncreaseOfRectangle;

  // Draw a rectangle to graph results
  // stroke(0);
  // strokeWeight(2);
  // fill(255);

  //divide the canvas into equal parts as per number of rectangles.
  let widthOfEachRectangle = width / randomCounts.length;

  for (let x = 0; x < randomCounts.length; x++) {

    //I want a different color for each rectangle.

    stroke_color_x = random(colormaxnumber);
    stroke_color_y = random(colormaxnumber);
    stroke_color_z = random(colormaxnumber);

    // let fillcolor = random(colormaxnumber);
    // fill(fillcolor);
    fill_color_x = random(colormaxnumber);
    fill_color_y = random(colormaxnumber);
    fill_color_z = random(colormaxnumber);
    fill(fill_color_x, fill_color_y, fill_color_z);

    stroke(stroke_color_x, stroke_color_y, stroke_color_z);
    strokeWeight(stroke_weight);

    // Draw a rectangle at location (30, 20)
    // with a width and height of 55.
    // the first two parameters set the location of the upper-left corner
    // rect(30, 20, 55, 55);
    let locationX = x * widthOfEachRectangle;
    let locationY = height - randomCounts[x];
    let rectangleWidth = widthOfEachRectangle - 1;
    let rectangleHeight = randomCounts[x];
    //rect(x * widthOfEachRectangle, height - randomCounts[x], widthOfEachRectangle - 1, randomCounts[x]);
    rect(locationX, locationY, rectangleWidth, rectangleHeight);
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(bg_color_x, bg_color_y, bg_color_z);
}
