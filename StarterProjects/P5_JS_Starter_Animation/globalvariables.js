let bg_color_x = 255;
let bg_color_y = 51;
let bg_color_z = 153;

//the max allowed stroke Weight
let stroke_Weight = 20;

//number of movers
//increase this number to see more movers
//decrease this number to see less movers
let numberOfMovers = 50;

let mover;
let movers= [];
let rgbSetFillMovers = [];
let rgbSetStrokeMovers = [];
let stroke_WeightMovers = [];
let moverMass = 3;
let massMinimum = 1;
let massMaximum = 5;

//higher is the size, the more gravity it will have
//lower is the size, the less gravity it will have
//that means, the smaller the size, the more the movers will be attracted to the attractor
//that means, the bigger the size, the less the movers will be attracted to the attractor
let attractorSize = 200;

//higher is the gravity, the more the movers will be attracted to the attractor
//lower is the gravity, the less the movers will be attracted to the attractor
//that means, the higher the gravity, the more the movers will be attracted to the attractor
let attractorGravity = 0.8;

//this is like a paint brush
//if you want to see the trail, set this to true
let leaveTrail = true;


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

//global functions and classes here

class colorRGBSet {
    constructor() {
        this.red = random(255);
        this.green = random(255);
        this.blue = random(255);
    }
}

function applyForce(mover) {
    // Calculate direction of force
    //here, createVector(width / 2, height / 2), we are always trying to make them
    //go to the center of the screen.
    //you can manipulate this to make the movers go to the mouse position
    //or any other position you want.
    let force = p5.Vector.sub(createVector(width / 2, height / 2), mover.position);
    // Distance between objects
    let distance = force.mag();
    // Limiting the distance to eliminate "extreme" results for very close or very far objects
    distance = constrain(distance, constrainMin, constrainMax);

    // Calculate gravitional force magnitude
    let strength = (attractorGravity * attractorSize * mover.mass) / (distance * distance);
    // Get force vector --> magnitude * direction
    force.setMag(strength);
    return force;
} 