class Walker {
    //[full] Objects have data.
    var x = 0;
    int y;
    //[end]

    //[full] Objects have a constructor where they are initialized.
    Walker() {
        x = width/2;
        y = height/2;
    }
    //[end]
      
    //[full] Objects have functions.
    void display() {
        stroke(0);
        point(x,y);
    }
    //[end]     

    void step() {
        // 0, 1, 2, or 3
        int choice = int(random(4));
        //[full] The random “choice” determines our step.
        if (choice == 0) {
            x++;
        } else if (choice == 1) {
            x--;
        } else if (choice == 2) {
            y++;
        } else {
            y--;
        }
        //[end]
        }
    }          
    
}