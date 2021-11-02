let massForRadius = 8;

class colorRGBSet {
    constructor() {
        this.red = random(255);
        this.green = random(255);
        this.blue = random(255);
    }
}

class Mover {
    constructor(x, y, mass) {
        this.mass = mass;
        this.radius = mass * massForRadius;
        this.position = createVector(x, y);
        this.velocity = createVector(1, 0);
        this.acceleration = createVector(0, 0);
    }
    // Newton's 2nd law: F = M * A
    // or A = F / M
    applyForce(force) {
        let f = p5.Vector.div(force, this.mass);
        this.acceleration.add(f);
    }

    update() {
        // Velocity changes according to acceleration
        this.velocity.add(this.acceleration);
        // position changes by velocity
        this.position.add(this.velocity);
        // We must clear acceleration each frame
        this.acceleration.mult(0);
    }

    display() {
        stroke(0);
        strokeWeight(2);
        fill(255, 127);
        ellipse(this.position.x, this.position.y, this.radius * 2);
    }

    display(rgbSetFill, rgbSetStroke, stroke_Weight) {
        stroke(rgbSetStroke.red, rgbSetStroke.green, rgbSetStroke.blue);
        strokeWeight(stroke_Weight);
        fill(rgbSetFill.red, rgbSetFill.green, rgbSetFill.blue);
        ellipse(this.position.x, this.position.y, this.radius * 2);
    }
}