let massForRadius = 8;
let speedOfMovement = 1;

class Mover {
    constructor() {
        //this.position = createVector(width / 2, height / 2);
        this.position = createVector(random(width ), random(height));
        this.velocity = createVector(0, 0);
        this.acceleration = 0;
        this.topspeed = speedOfMovement;
        this.xoff = 1000;
        this.yoff = 0;
        this.r = 16;
    }

    // Newton's 2nd law: F = M * A
    // or A = F / M
    applyForce(force) {
        let f = p5.Vector.div(force, this.mass);
        this.acceleration.add(f);
    }

    update() {
        let mouse = createVector(mouseX, mouseY);
        let dir = p5.Vector.sub(mouse, this.position);
        dir.normalize();
        dir.mult(0.5);
        this.acceleration = dir;

        this.velocity.add(this.acceleration);
        this.velocity.limit(this.topspeed);
        this.position.add(this.velocity);
    }

    checkEdges() {
        if (this.position.x > width) {
            this.position.x = 0;
        } else if (this.position.x < 0) {
            this.position.x = width;
        }

        if (this.position.y > height) {
            this.position.y = 0;
        } else if (this.position.y < 0) {
            this.position.y = height;
        }
    }

    display() {
        let angle = this.velocity.heading();

        stroke(0);
        strokeWeight(2);
        fill(127);
        push();

        rectMode(CENTER);
        translate(this.position.x, this.position.y);
        rotate(angle);
        rect(0, 0, 30, 10);

        pop();
    }

    display(rgbSetFill, rgbSetStroke, stroke_Weight) {

        let angle = this.velocity.heading();

        stroke(rgbSetStroke.red, rgbSetStroke.green, rgbSetStroke.blue);        
        strokeWeight(stroke_Weight);        
        fill(rgbSetFill.red, rgbSetFill.green, rgbSetFill.blue);

        push();

        rectMode(CENTER);
        translate(this.position.x, this.position.y);
        rotate(angle);
        rect(0, 0, 30, 10);
        // rect(0, 0, random(30), random(10));
        
        pop();       
    }
}