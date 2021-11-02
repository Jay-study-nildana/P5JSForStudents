let fill_ellipse_color_x = 155;
let fill_ellipse_color_y = 51;
let fill_ellipse_color_z = 200;

let ellipse_width = 64
let ellipse_height = 64

let xoff = 0;
let xincrement = 0.02;

let yoff = 0;
let yincrement = 0.03;

let xoff2 = 0;
let xincrement2 = 0.03;

let yoff2 = 0;
let yincrement2 = 0.01;

let radiusMultiplier = 8;

class colorRGBSet {
    constructor() {
        this.red = random(255);
        this.green = random(255);
        this.blue = random(255);
    }
}

class Mover {
    constructor(x, y, m) {
        this.mass = m;
        this.radius = m * radiusMultiplier;
        this.position = createVector(x, y);
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, 0);
    }

    applyForce(force) {
        let f = p5.Vector.div(force, this.mass);
        this.acceleration.add(f);
    }

    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
    }

    display() {
        stroke(0);
        strokeWeight(2);
        fill(255, 127);
        ellipse(this.position.x, this.position.y, this.radius * 2);
    }

    checkEdges() {
        if (this.position.x > width - this.radius) {
            this.position.x = width - this.radius;
            this.velocity.x *= -1;
        } else if (this.position.x < this.radius) {
            this.position.x = this.radius;
            this.velocity.x *= -1;
        }
        if (this.position.y > height - this.radius) {
            this.position.y = height - this.radius;
            this.velocity.y *= -1;
        }
    }

    display(rgbSetFill, rgbSetStroke, stroke_Weight) {
        stroke(rgbSetStroke.red, rgbSetStroke.green, rgbSetStroke.blue);
        strokeWeight(stroke_Weight);
        fill(rgbSetFill.red, rgbSetFill.green, rgbSetFill.blue);
        ellipse(this.position.x, this.position.y, this.radius * 2);
    }

}