var imgBaby1;
var startingpointofhouse;
var CenterPointX;
var CenterPointY;
//use this to turn on and off the center of gravity circles
var showCenterOfGravity = true;
//toggle on and off click to save screenshot
var ClickToSaveScreenShot = true;
var LoggingIsAllowed = false;

const maxRandomColorValue = 256;

function preload() {
  imgBaby1 = loadImage('images/pablo-634.png');
}

function setup() {

  startingpointofhouse = 100;

  // put setup code here
  // createCanvas(400, 400);
  // createCanvas(displayWidth, displayHeight);
  // pixelDensity(10.0);
  CenterPointX = windowWidth / 2;
  CenterPointY = windowHeight / 2;
  createCanvas(windowWidth, windowHeight);
  GeneralLogging();
  noLoop();  //this will stop the redrawing

}

function draw() {


  if (windowWidth < windowHeight) {
    textSize(32);
    let mobilePortraitNotYetSupported = "Sorry. Portrait Mode Not Supported. Please rotate your device";
    text(mobilePortraitNotYetSupported, 0, CenterPointY, windowWidth, windowHeight);
  }
  else {
    // put drawing code here
    // background(200,5,5);
    background(RandomNumberForFun(maxRandomColorValue), RandomNumberForFun(maxRandomColorValue), RandomNumberForFun(maxRandomColorValue));
    // ellipse(initialX + 50, 50, 80, 80);
    // image(imgBaby1, initialX + 200, 0);
    // imgBaby1.resize(150, 0);
    GeneralLogging();
    CenterPointX = windowWidth / 2;
    CenterPointY = windowHeight / 2;
    DrawHouse(startingpointofhouse);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  GeneralLogging();
}

function GeneralLogging() {

  if (LoggingIsAllowed == true) {
    console.log("displayWidth: " + displayWidth + " displayHeight: " + displayHeight);
    console.log("windowWidth: " + windowWidth + " windowHeight: " + windowHeight);
    console.log("Value of numberOfSeconds: " + numberOfSeconds);
    console.log("CenterPointX: " + CenterPointX + " CenterPointY: " + CenterPointY);
  }

}

function RandomNumberForFun(ceilingvalue) {
  //Return a random number between 1 and ceilingvalue:
  let randomNumberGenerated = Math.floor((Math.random() * ceilingvalue) + 1);
  return randomNumberGenerated;
}