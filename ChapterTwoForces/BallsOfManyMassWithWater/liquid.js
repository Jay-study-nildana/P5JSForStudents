let dragForceMultiplier = 1;

class Liquid {
    constructor(x, y, w, h, c) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.c = c;
    }
  
    // Is the Mover in the Liquid?
    contains(mover) {
      let l = mover.position;
      return l.x > this.x && l.x < this.x + this.w &&
        l.y > this.y && l.y < this.y + this.h;
    }
  
    // Calculate drag force
    calculateDrag(mover) {
      // Magnitude is coefficient * speed squared
      let speed = mover.velocity.mag();
      let dragMagnitude = this.c * speed * speed;
  
      // Direction is inverse of velocity
      let dragForce = mover.velocity.copy();
      dragForce.mult(-dragForceMultiplier);
  
      // Scale according to magnitude
      // dragForce.setMag(dragMagnitude);
      dragForce.normalize();
      dragForce.mult(dragMagnitude);
      return dragForce;
    }
  
    display() {
      noStroke();
      //rgb(0, 204, 255) - blue color
      fill(0, 204, 255);
      rect(this.x, this.y, this.w, this.h);
    }
  }