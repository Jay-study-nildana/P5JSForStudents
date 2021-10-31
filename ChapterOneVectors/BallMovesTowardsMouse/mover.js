let stroke_fill_color_x = 51;
let stroke_fill_color_y = 51;
let stroke_fill_color_z = 255;

let stroke_Weight = 2;

let stroke_color_x = 0;
let stroke_color_y = 102;
let stroke_color_z = 255;

let ellipse_width = 64
let ellipse_height = 64

let mag_value = 0.2

class Mover {
    constructor() {
        this.position = createVector(random(width), random(height));
        this.velocity = createVector();
        this.acceleration = createVector();
        this.topspeed = 5;
    }

    update() {
        // Compute a vector that points from position to mouse
        var mouse = createVector(mouseX, mouseY);
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
}