//beginner background colors for setup

let bg_color_x = 255;
let bg_color_y = 51;
let bg_color_z = 153;

//the max allowed stroke Weight
let stroke_Weight = 20;

let leaveTrail = true;
//false gives you symmetrical tree.
let randomTheta = true; 

let theta;  //decides the angle of the branch
let startDrawing; //decide to start drawing only after the mouse click.
let lengthOfFirstBranch; //not used.
let linelimit; //number of lines to draw with each call
let animationTracker; //decide how frequently the animation updates.
let maxLines; //the point at which you want the lines to stop. avoids over crowding of lines on the animation.
let openingTreeThickness;
let reductionOfLength; //default is 0.66
let reductionOfThickness; //default is 0.66

startDrawing=true;
//this increases or decreates the speed which tree goes
//higher is slower
let animationMultiplier = 100;
//decide when you want to stop growing the tree
//makes it less or more dense
//higher is denser
let stoppageValue = 6000;

class colorRGBSet {
    constructor() {
        this.red = random(255);
        this.green = random(255);
        this.blue = random(255);
    }
}