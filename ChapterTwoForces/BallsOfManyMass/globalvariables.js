let bg_color_x = 255;
let bg_color_y = 51;
let bg_color_z = 153;

let movers = []
let numberOfMovers = 25;

let ellipseColorsSet = [];
let ellipseStrokeColorsSet = [];
let ellipseStrokeWeight = [];

//the max allowed stroke Weight
let stroke_Weight = 10;

let massMinimum = 2;
let massMaximum = 10;

//decides how fast, the balls move to the left
//pushed by 'wind'
let windX = 0.1;
//I dont think windY is implemented in my code. this is a TODO as of now
let windY = 0.1;

let gravityX = 0;
let gravityY = 2.0;

//setting this to true will make the balls behave realistically.
//for instance, when gravity is off, the balls fall off one after another, looking more like people jumping off a plane one after another
//if gravity is false, the balls will fall in a straight line, like a normal physics simulation with smaller things falling and moving faster, and bigger things moving slowly.

//note - keeping this false is 'cooler' looking.

let realGravity = false;

//this is how much force or energy is lost during transit.
//like, when you are walking you move normally
//but, when you move inside a pool or lake with water
//or, if there is someone pushing against you, you move slower

//if there is no friction, then, the balls keep moving forever because they never lose any energy. like in space.

let realFriction = true;

let frictionInit = 0.01;
let frictionMult = 0.1;