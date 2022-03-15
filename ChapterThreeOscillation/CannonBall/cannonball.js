// let ballSize = 32;
let ballSpeed = 10;

class CannonBall {

    constructor(x, y, ballSize) {
        this.position = new createVector(x, y);
        this.velocity = new createVector();
        this.acceleration = new createVector();
        this.r = ballSize;
        this.topspeed = ballSpeed;
    }

    // Standard Euler integration
    update() {
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.topspeed);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
    }

    applyForce(force) {
        this.acceleration.add(force);
    }


    // display() {
    //     stroke(0);
    //     strokeWeight(2);
    //     push();
    //     translate(this.position.x, this.position.y);
    //     ellipse(0, 0, this.r * 2, this.r * 2);
    //     pop();
    // }

    display(rgbSetFill, rgbSetStroke, stroke_Weight) {

        push();
        strokeWeight(stroke_Weight);
        stroke(rgbSetStroke.red, rgbSetStroke.green, rgbSetStroke.blue);
        fill(rgbSetFill.red, rgbSetFill.green, rgbSetFill.blue);
        translate(this.position.x, this.position.y);
        ellipse(0, 0, this.r * 2, this.r * 2);
        pop();
    }
}