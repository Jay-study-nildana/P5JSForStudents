class Oscillator {
    constructor() {
        this.angle = createVector();
        this.velocity = createVector(random(-0.05, 0.05), random(-0.05, 0.05));
        this.amplitude = createVector(random(20, width / 2), random(20, height / 2));
    }

    oscillate() {
        this.angle.add(this.velocity);
    }

    display() {
        let x = sin(this.angle.x) * this.amplitude.x;
        let y = sin(this.angle.y) * this.amplitude.y;

        push();
        translate(width / 2, height / 2);
        stroke(255);
        strokeWeight(2);
        fill(127, 127);
        line(0, 0, x, y);
        ellipse(x, y, 32, 32);
        pop();
    }

    //ballFill, ballStroke, ballStrokeWeight,
    //lineFill, lineStroke, lineStrokeWeight
    display(rgbSetFill, rgbSetStroke, stroke_Weight,
        lineFill, lineStroke, lineStrokeWeight) {

        let x = sin(this.angle.x) * this.amplitude.x;
        let y = sin(this.angle.y) * this.amplitude.y;        

        push();
        translate(width / 2, height / 2);
        stroke(rgbSetStroke.red, rgbSetStroke.green, rgbSetStroke.blue);
        strokeWeight(stroke_Weight);
        fill(rgbSetFill.red, rgbSetFill.green, rgbSetFill.blue);
        ellipse(x, y, ellipse_width, ellipse_height);

        stroke(lineStroke.red, lineStroke.green, lineStroke.blue);
        strokeWeight(lineStrokeWeight);
        fill(lineFill.red, lineFill.green, lineFill.blue);        
        line(0, 0, x, y);
        
        pop();        
    }
}