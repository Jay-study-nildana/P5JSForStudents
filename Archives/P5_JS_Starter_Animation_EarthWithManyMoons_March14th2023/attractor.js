// An object for a draggable attractive body in our world

class Attractor {
    constructor(attractorSize,attractorGravity) {
        this.position = createVector(width / 2, height / 2);
        this.mass = attractorSize;
        this.G = attractorGravity;
        this.dragOffset = createVector(0, 0);
        this.dragging = false;
        this.rollover = false;
    }

    attract(mover) {
        // Calculate direction of force
        let force = p5.Vector.sub(this.position, mover.position);
        // Distance between objects
        let distance = force.mag();
        // Limiting the distance to eliminate "extreme" results for very close or very far objects
        distance = constrain(distance, constrainMin, constrainMax);

        // Calculate gravitional force magnitude
        let strength = (this.G * this.mass * mover.mass) / (distance * distance);
        // Get force vector --> magnitude * direction
        force.setMag(strength);
        return force;
    }

    // Method to display
    display() {
        ellipseMode(CENTER);
        strokeWeight(4);
        stroke(0);
        if (this.dragging) {
            fill(50);
        } else if (this.rollover) {
            fill(100);
        } else {
            fill(175, 200);
        }
        ellipse(this.position.x, this.position.y, this.mass * 2, this.mass * 2);
    }

    display(rgbSetFill, rgbSetStroke, stroke_Weight) {

        ellipseMode(CENTER);
        strokeWeight(stroke_Weight);
        stroke(rgbSetStroke.red, rgbSetStroke.green, rgbSetStroke.blue);
        if (this.dragging) {
            fill(50);
        } else if (this.rollover) {
            fill(100);
        } else {
            fill(rgbSetFill.red, rgbSetFill.green, rgbSetFill.blue);
        }
        ellipse(this.position.x, this.position.y, this.mass * 2, this.mass * 2);
    }

    // The methods below are for mouse interaction
    handlePress(mx, my) {
        let d = dist(mx, my, this.position.x, this.position.y);
        if (d < this.mass) {
            this.dragging = true;
            this.dragOffset.x = this.position.x - mx;
            this.dragOffset.y = this.position.y - my;
        }
    }

    handleHover(mx, my) {
        let d = dist(mx, my, this.position.x, this.position.y);
        if (d < this.mass) {
            this.rollover = true;
        } else {
            this.rollover = false;
        }
    }

    stopDragging() {
        this.dragging = false;
    }

    handleDrag(mx, my) {
        if (this.dragging) {
            this.position.x = mx + this.dragOffset.x;
            this.position.y = my + this.dragOffset.y;
        }
    }
}