
// Simple Particle System

// A simple Particle class

class Particle {
    constructor(position) {
      this.acceleration = createVector(0, 0.05);
      this.velocity = createVector(random(-1, 1), random(-1, 0));
      this.position = position.copy();
      this.lifespan = 255.0;
    }
  
    run() {
      this.update();
    //   this.display(); //this is for a single color projection.
        this.displayWithRandomColors(); //this is for a more colorful experience
    }
  
    // Method to update position
    update() {
      this.velocity.add(this.acceleration);
      this.position.add(this.velocity);
      this.lifespan -= 2;  ///this decides how far along the particles show up on the screen.
    }
  
    // Method to display
    display() {
      stroke(255, this.lifespan);
      strokeWeight(2);
      fill(127, this.lifespan);
      ellipse(this.position.x, this.position.y, 12, 12);
    }

    //same as display()
    displayWithRandomColors()
    {
        let rgbSetStroke = new colorRGBSet();
        let rgbSetFill = new colorRGBSet();
        //use the following to get the border also to change, giving like a even more blinking effect
        // stroke(rgbSetStroke.red, rgbSetStroke.green, rgbSetStroke.blue,this.lifespan);
        stroke(255, this.lifespan);
        strokeWeight(2);
        fill(rgbSetFill.red, rgbSetFill.green, rgbSetFill.blue, this.lifespan);
        // ellipse(this.position.x, this.position.y, 12, 12);        
        ellipse(this.position.x, this.position.y, 50, 50);        
    }
  
    // Is the particle still useful?
    isDead() {
      if (this.lifespan < 0.0) {
        return true;
      } else {
        return false;
      }
    }
  }

  class ParticleSystem {
    constructor(num, position) {
      this.origin = position.copy();
      this.particles = [];
      for (let i = 0; i < num; i++) {
        this.particles.push(new Particle(this.origin));
      }
    }
  
    addParticle() {
      this.particles.push(new Particle(this.origin));
    }
  
    run() {
      // Run every particle
      // ES6 for..of loop
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
      // https://www.youtube.com/watch?v=Y8sMnRQYr3c
      for (let particle of this.particles) {
        particle.run();
      }
  
      // Filter removes any elements of the array that do not pass the test
      // I am also using ES6 arrow snytax
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
      // https://www.youtube.com/watch?v=mrYMzpbFz18
      this.particles = this.particles.filter(particle => !particle.isDead());
  
      // Without ES6 arrow code would look like:
      // this.particles = this.particles.filter(function(particle) {
      //   return !particle.isDead();
      // });
  
    }
  }
