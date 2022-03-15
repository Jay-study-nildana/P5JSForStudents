

function display(rgbSetFill, rgbSetStroke, stroke_Weight,x,y) {

    // Draw the ellipse at the cartesian coordinate
    ellipseMode(CENTER);
    // fill(127);
    fill(rgbSetFill.red, rgbSetFill.green, rgbSetFill.blue);
    // stroke(255);
    stroke(rgbSetStroke.red, rgbSetStroke.green, rgbSetStroke.blue);
    // strokeWeight(2);
    strokeWeight(stroke_Weight);
    if(spiralDraw == false)
    {
        line(0, 0, x, y);
    }
    else
    {

    }
    
    ellipse(x, y, ellipse_width, ellipse_height);
}