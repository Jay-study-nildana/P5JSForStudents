
class Tree {
    constructor(linelimit, PositionX, PositionY) {
        this.linelimit = linelimit;
        this.PositionX = PositionX;
        this.PositionY = PositionY;

    }
}

function branchWithLineLimitWithThick(len, linelimit, linethick) {
    // Each branch will be 2/3rds the size of the previous one

    //float sw = map(len,2,120,1,10);
    //strokeWeight(sw);
    strokeWeight(linethick);
    var tempColor = new colorRGBSet();
    // stroke(255);
    stroke(tempColor.red, tempColor.green, tempColor.blue);

    line(0, 0, 0, -len);
    // Move to the end of that line
    translate(0, -len);

    len *= reductionOfLength;
    linethick *= reductionOfThickness;
    linelimit--;
    // All recursive functions must have an exit condition!!!!
    // Here, ours is when the length of the branch is 2 pixels or less
    if (len > 2 && linelimit > 0) {
        push();    // Save the current state of transformation (i.e. where are we now)
        if (randomTheta == true) {
            theta = random(0, PI / 3);
        }
        rotate(theta);   // Rotate by theta
        // branch(len);       // Ok, now call myself to draw two new branches!!
        branchWithLineLimitWithThick(len, linelimit, linethick);
        pop();     // Whenever we get back here, we "pop" in order to restore the previous matrix state

        // Repeat the same thing, only branch off to the "left" this time!
        push();
        if (randomTheta == true) {
            theta = random(0, PI / 3);
        }
        rotate(-theta);
        branchWithLineLimitWithThick(len, linelimit, linethick);
        pop();
    }
}

//draw a tree but limit the number of lines it draws
//avoid overcrowding.
//also set thickness
function drawTreeWithLineLimit(linelimit) {
    // Let's pick an angle 0 to 90 degrees based on the mouse position
    // theta = map(mouseX, 0, width, 0, PI / 2);

    // Start the tree from the bottom of the screen
    translate(width / 2, height);
    var tempColor = new colorRGBSet();
    // stroke(255);
    stroke(tempColor.red, tempColor.green, tempColor.blue);
    // branch(lengthOfFirstBranch);
    // branchWithLineLimit(lengthOfFirstBranch, linelimit);
    branchWithLineLimitWithThick(lengthOfFirstBranch, linelimit, openingTreeThickness);
}