let walker;
let colormaxnumber;
let countOfDraw;
let colorSwitch;
let FPSMultiplier;
let changeColor;
let delayedStart;

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
//decides the size of the tiny circles.
//in my experience, 10, seems to the perfect size.
let stroke_weight = 10;

//this has to be 4. We have four directions.
//any other number, the art will keep going in one specific direction. 
//https://stackoverflow.com/questions/69437751/p5-js-random-walk-always-ends-up-on-the-top-border/69438015#69438015
let random_number_for_walking = 4;