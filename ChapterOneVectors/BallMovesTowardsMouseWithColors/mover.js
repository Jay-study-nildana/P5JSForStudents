let stroke_fill_color_x = 51;
let stroke_fill_color_y = 51;
let stroke_fill_color_z = 255;



let stroke_color_x = 0;
let stroke_color_y = 102;
let stroke_color_z = 255;

let ellipse_width = 64
let ellipse_height = 64

//default is 0.2
//when the circles rest, they start oscillating
//smaller values increase oscillation from center
//higher values make them all get attached to the center
let mag_value = 0.01;

//default speed is 5
let ellipse_Speed = 5;

class colorRGBSet {
    constructor(){
        this.red = random(255);
        this.green = random(255);
        this.blue = random(255);
    }
}

class Mover {
    constructor() {
        this.position = createVector(random(width), random(height));
        this.velocity = createVector();
        this.acceleration = createVector();
        this.topspeed = ellipse_Speed;
    }

    update() {
        // Compute a vector that points from position to mouse
        //get the current mouse position
        //we will move the current ellipse towards this mouse position
        var mouse = createVector(mouseX, mouseY);
        //get the direction to travel i think
        this.acceleration = p5.Vector.sub(mouse, this.position);
        // Set magnitude of acceleration
        this.acceleration.setMag(mag_value);

        this.velocity.add(this.acceleration);
        this.velocity.limit(this.topspeed);
        this.position.add(this.velocity);

    }

    display() {
        // stroke(0);
        // strokeWeight(2);
        // fill(127);
        // ellipse(this.position.x, this.position.y, 48, 48);

        stroke(stroke_color_x, stroke_color_y, stroke_color_z);
        strokeWeight(stroke_Weight);
        fill(stroke_fill_color_x, stroke_fill_color_y, stroke_fill_color_z);
        ellipse(this.position.x, this.position.y, ellipse_width, ellipse_height);
    }

    display(rgbSet)
    {
        stroke(stroke_color_x, stroke_color_y, stroke_color_z);
        strokeWeight(stroke_Weight);
        fill(rgbSet.red, rgbSet.green, rgbSet.blue);
        ellipse(this.position.x, this.position.y, ellipse_width, ellipse_height);        
    }

    display(rgbSetFill,rgbSetStroke,stroke_Weight)
    {
        stroke(rgbSetStroke.red, rgbSetStroke.green, rgbSetStroke.blue);
        strokeWeight(stroke_Weight);
        fill(rgbSetFill.red, rgbSetFill.green, rgbSetFill.blue);
        ellipse(this.position.x, this.position.y, ellipse_width, ellipse_height);        
    }    
}