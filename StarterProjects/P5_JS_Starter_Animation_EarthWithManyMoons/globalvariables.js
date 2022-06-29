let bg_color_x = 255;
let bg_color_y = 51;
let bg_color_z = 153;

//the max allowed stroke Weight
let stroke_Weight = 20;

let numberOfMovers = 50;

let mover;
let movers= [];
let rgbSetFillMovers = [];
let rgbSetStrokeMovers = [];
let stroke_WeightMovers = [];
let moverMass = 3;
let massMinimum = 1;
let massMaximum = 5;

let attractor;
let attractorSize = 100;
let attractorGravity = 0.5;

let leaveTrail = false;
let rgbSetFillAttractor;
let rgbSetStrokeAttractor;
let stroke_WeightAttractor;

let rgbSetFillMover;
let rgbSetStrokeMover;
let stroke_WeightMover;

let massForRadius = 8;

//limit the distance
let constrainMin = 5;
let constrainMax = 25;

//global functions

class colorRGBSet {
    constructor() {
        this.red = random(255);
        this.green = random(255);
        this.blue = random(255);
    }
}