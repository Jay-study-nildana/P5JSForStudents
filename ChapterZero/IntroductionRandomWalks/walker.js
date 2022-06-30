class Walker {
    constructor() {
      this.x = width / 2;
      this.y = height / 2;
    }
  
    render() {
      //https://p5js.org/reference/#/p5/stroke
      // strokeWeight(4);
      // stroke(51);    
  
      stroke(stroke_color_x, stroke_color_y, stroke_color_z);
      strokeWeight(stroke_weight);
      point(this.x, this.y);
    }
  
    step() {
      var choice = floor(random(random_number_for_walking));
      if (choice === 0) {
        // this.x++;
        this.x = this.x + stroke_weight;
      } else if (choice == 1) {
        // this.x--;
        this.x = this.x - stroke_weight;
      } else if (choice == 2) {
        // this.y++;
        this.y = this.y + stroke_weight;
      } else {
        // this.y--;
        this.y = this.y - stroke_weight;
      }
      this.x = constrain(this.x, 0, width - stroke_weight);
      this.y = constrain(this.y, 0, height - stroke_weight);
    }
  }