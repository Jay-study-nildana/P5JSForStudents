//this is where I plan to draw the house.

//The House is our anchor.
//Everything else revolves around this.

function DrawHouse(startingpointofhouse) {
    if (LoggingIsAllowed == true) {
        console.log("startingpointofhouse : " + startingpointofhouse);
    }
    let c = color(255, 204, 0);
    fill(c);
    //The house is about 25 % to the left from the center
    //The house is about 35 % to the right from the center
    const HouseLeftPercentage = 0.25;
    const HouseTopPercentage = 0.20;
    //the house is about 35 % of the entire canvas width
    const HouseWidth = 0.35;
    const HouseHeight = 0.35;

    RectangleX1 = CenterPointX - (windowWidth * HouseLeftPercentage);
    RectangleY1 = CenterPointY - (windowHeight * HouseTopPercentage);
    HouseWidthActual = windowWidth * HouseWidth;
    HouseHeightActual = windowHeight * HouseHeight;

    // Draw a rectangle at location (30, 20) with a width and height of 55.
    // rect(30, 20, 55, 55);
    rect(RectangleX1, RectangleY1, HouseWidthActual, HouseHeightActual, 20);


    //now, the windows.
    //now let's draw the door
    const HouseXFactorDoor = 0.05;
    const HouseYFactorDoor = 0.2;
    var RectangleX1Door, RectangleY1Door;
    const HouseWidthPercentageDoor = 0.1;
    const HouseHeightPercentageDoor = 0.29;
    RectangleX1Door = CenterPointX - (CenterPointX * HouseXFactorDoor);
    RectangleY1Door = CenterPointY - (CenterPointY * HouseYFactorDoor);
    DoorWidthActual = windowWidth * HouseWidthPercentageDoor;
    DoorHeightActual = HouseHeightActual - (HouseHeightActual * HouseHeightPercentageDoor);
    c = color(100, 204, 200);
    fill(c);
    rect(RectangleX1Door, RectangleY1Door, DoorWidthActual, DoorHeightActual);

    const HouseXFactorWindow = 0.45;
    const HouseYFactorWindow = 0.15;
    var RectangleX1Window, RectangleY1Window;
    const HouseWidthPercentageWindow = 0.155;
    const HouseHeightPercentageWindow = 0.5;
    RectangleX1Window = CenterPointX - (CenterPointX * HouseXFactorWindow);
    RectangleY1Window = CenterPointY - (CenterPointY * HouseYFactorWindow);
    WindowWidthActual = windowWidth * HouseWidthPercentageWindow;
    WindowHeightActual = HouseHeightActual - (HouseHeightActual * HouseHeightPercentageWindow);
    c = color(100, 150, 200);
    fill(c);
    rect(RectangleX1Window, RectangleY1Window, WindowWidthActual, WindowHeightActual);



    //now the roof
    //triangle(30, 75, 58, 20, 86, 75);

    const RoofPointPercentageOneX = 0.5;
    const RoofPointPercentageOneY = 0.3;
    const RoofPointPercentageTwoX = 0.0;
    const RoofPointPercentageTwoY = 0.8;
    const RoofPointPercentageThreeX = 0.5;
    const RoofPointPercentageThreeY = 0.5;
    const RoofHeightPercentage = 0.14;
    const RoofWidthPercentage = 0.8;

    TrianglePointX1 = CenterPointX - CenterPointX * RoofPointPercentageOneX;
    TrianglePointY1 = CenterPointY - CenterPointY * RoofPointPercentageOneY;
    TrianglePointX2 = CenterPointX - CenterPointX * RoofPointPercentageTwoX;
    TrianglePointY2 = CenterPointY - CenterPointY * RoofPointPercentageTwoY;
    TrianglePointX3 = CenterPointX + CenterPointX * RoofPointPercentageThreeX;
    TrianglePointX3 = TrianglePointX1 + HouseWidthActual;
    // TrianglePointY3 = CenterPointY - CenterPointY * RoofPointPercentageOneY;
    TrianglePointY3 = TrianglePointY1;

    //height adjuster

    TrianglePointY1 = TrianglePointY1 - HouseHeightActual * RoofHeightPercentage;
    TrianglePointY2 = TrianglePointY2 - HouseHeightActual * RoofHeightPercentage;
    TrianglePointY3 = TrianglePointY3 - HouseHeightActual * RoofHeightPercentage;

    //width adjuster
    // TrianglePointX1 = TrianglePointX1 - TrianglePointX1 * RoofWidthPercentage;
    // TrianglePointX2 = TrianglePointX2 - TrianglePointX2 * RoofWidthPercentage;
    // TrianglePointX3 = TrianglePointX3 - TrianglePointX3 * RoofWidthPercentage;    

    c = color(55, 200, 200);
    fill(c);
    triangle(TrianglePointX1, TrianglePointY1, TrianglePointX2, TrianglePointY2, TrianglePointX3, TrianglePointY3);

    //show the center circle
    if (showCenterOfGravity == true) {
        c = color(255, 204, 200);
        fill(c);
        circle(CenterPointX, CenterPointY, 20);
    }

    //let's look at the road. - Part One
    const HouseXFactorRoad1 = 0.02;
    const HouseYFactorRoad1 = 0.2;
    var RectangleX1Road1, RectangleY1Road1;
    const HouseWidthPercentageRoad1 = 0.1;
    const HouseHeightPercentageRoad1 = 0.29;
    RectangleX1Road1 = RectangleX1Door;
    RectangleY1Road1 = RectangleY1Door + DoorHeightActual + DoorHeightActual * HouseXFactorRoad1;
    Road1WidthActual = windowWidth * HouseWidthPercentageRoad1;
    Road1HeightActual = HouseHeightActual - (HouseHeightActual * HouseHeightPercentageRoad1);
    c = color(100, 204, 150);
    fill(c);
    rect(RectangleX1Road1, RectangleY1Road1, Road1WidthActual, Road1HeightActual);

    //let's look at the road. - Part Two
    const HouseXFactorRoad2 = 0.02;
    const HouseYFactorRoad2 = 0.2;
    var RectangleX1Road2, RectangleY1Road2;
    const HouseWidthPercentageRoad2 = 0.1;
    const HouseHeightPercentageRoad2 = 0.29;
    RectangleX1Road2 = 0;
    RectangleY1Road2 = RectangleY1Road1 + Road1HeightActual + HouseXFactorRoad2;
    Road2WidthActual = windowWidth;
    Road2HeightActual = HouseHeightActual - (HouseHeightActual * HouseHeightPercentageRoad2);
    c = color(100, 204, 150);
    fill(c);
    rect(RectangleX1Road2, RectangleY1Road2, Road2WidthActual, Road2HeightActual);

    //bonsai tree
    //code borrowed from https://happycoding.io/examples/p5js/creating-classes/bonsai-tree

    //TODO - the tree is not proportional to width and height
    //note only the size is not proportional not the physical location
    const PlantFactorX = 0.6;
    const PlantFactorY = 1.5;
    plantX = RectangleX1 - RectangleX1 * PlantFactorX;
    plantY = RectangleY1 + RectangleY1 * PlantFactorY;
    plant = new Node(null, 50, random(200, 255), TAU * 0.75);
    strokeWeight(4);

    plant.draw();
    plant.maybeGrow();
    stroke(200, 0, 0);
    fill(128, 0, 0);
    quad(plantX - 50, plantY,
        plantX + 50, plantY,
        plantX + 25, plantY + 25,
        plantX - 25, plantY + 25);
    var NumberOfPlanLeaves = 25;

    for (plantloop = 0; plantloop < NumberOfPlanLeaves; plantloop++) {
        plant.draw();
        plant.maybeGrow();
    }


    //lets draw a coloud
    CloudFactorX = 2.3;
    CloudFactorY = 0.6;
    ellipseX = RectangleX1 + RectangleX1 * CloudFactorX;
    ellipseY = RectangleY1 - RectangleY1 * CloudFactorY;
    ellipseWidth = windowWidth * 0.1;
    ellipseHeight = windowHeight * 0.05;
    CloudSizeModifierX1 = windowWidth * 0.01;
    CloudSizeModifierY1 = windowHeight * 0.03;
    CloudSizeModifierX2 = CloudSizeModifierX1 + windowWidth * 0.01;
    CloudSizeModifierY2 = CloudSizeModifierY1 - windowHeight * 0.04;
    CloudSizeModifierX3 = CloudSizeModifierX2 + windowWidth * 0.01;
    CloudSizeModifierY3 = CloudSizeModifierY2 + windowHeight * 0.01;

    noStroke();
    //rgb(128,212,255) - light blue
    fill(128, 212, 255);
    ellipse(ellipseX, ellipseY, ellipseWidth, ellipseHeight);
    // fill(200, 100, 10);
    ellipse(ellipseX + CloudSizeModifierX1, ellipseY + CloudSizeModifierY1, ellipseWidth, ellipseHeight);
    // fill(128, 200, 50);
    ellipse(ellipseX + CloudSizeModifierX2, ellipseY + CloudSizeModifierY2, ellipseWidth, ellipseHeight);
    // fill(128, 50, 90);
    ellipse(ellipseX + CloudSizeModifierX3, ellipseY + CloudSizeModifierY3, ellipseWidth, ellipseHeight);
    // ellipse(ellipseX, ellipseY, ellipseWidth, ellipseHeight);
    // ellipse(ellipseX, ellipseY, ellipseWidth, ellipseHeight);

    stroke(255, 195, 77);
    fill(255, 230, 179);
    SunCircleFactorX = 0.5;
    SunCircleFactorY = 0.5;
    SunCircleX = RectangleX1 - RectangleX1 * SunCircleFactorX;
    SunCircleY = RectangleY1 - RectangleY1 * SunCircleFactorY;
    SunCircleWidth = windowWidth * 0.1;
    circle(SunCircleX, SunCircleY, SunCircleWidth);

    //lets do some text
    //text(str, x, y, [x2], [y2])

    let TextBoxWidth = windowWidth * 0.5;
    let TextBoxHeight = windowHeight * 0.5;
    let TextSizeForQuote = windowWidth * 0.01;
    textSize(TextSizeForQuote);

    let Text1X = RectangleX1Window + RectangleX1Window * 1.3;
    let Text1Y = RectangleY1Window;
    let sQuote = defaultQuote;
    fill(50);
    text(sQuote, Text1X, Text1Y, TextBoxWidth, TextBoxHeight); // Text wraps within text box  

    let Text2X = RectangleX1Window + RectangleX1Window * 1.9;
    let Text2Y = RectangleY1Window + windowHeight * 0.1;
    let sQuoteAuthor = defaultQuoteAuthor;
    fill(100);
    text(sQuoteAuthor, Text2X, Text2Y, TextBoxWidth, TextBoxHeight); // Text wraps within text box      

}

class Node {

    constructor(parent, parentSize, parentG, angle) {
        this.parent = parent;
        this.parentSize = parentSize;
        this.size = random(parentSize * minSizeMultiplier, parentSize);
        this.angle = angle;
        this.branchLength = random(minBranchLength, maxBranchLength);
        this.children = [];

        this.x = parent ? this.getX(parent.x) : plantX;
        this.y = parent ? this.getY(parent.y) : plantY;

        this.g = parentG + random(-25, 25);
        this.g = constrain(this.g, 128, 255);
    }

    getX(parentX) {
        return parentX + cos(this.angle) *
            (this.parentSize / 2 + this.branchLength + this.size / 2);
    }

    getY(parentY) {
        return parentY + sin(this.angle) *
            (this.parentSize / 2 + this.branchLength + this.size / 2);
    }

    grow() {
        const childAngle = this.angle + random(-PI / 3, PI / 3);
        const child = new Node(this, this.size, this.g, childAngle);

        if (child.size < 10) {
            return false;
        }

        if (child.x < plantBorder || child.x > width - plantBorder) {
            return false;
        }

        if (child.y < plantBorder || child.y > plantY - 25) {
            return false;
        }

        if (plant.intersects(this, child.x, child.y, child.size)) {
            return false;
        }

        this.children.push(child);
        return true;
    }

    maybeGrow() {
        const grew = this.grow();

        if (!grew) {
            const randomChild = random(this.children);
            if (randomChild) {
                randomChild.maybeGrow();
            }
        }
    }

    prune() {
        // can't prune the first node
        if (this == plant) {
            return;
        }
        const index = this.parent.children.indexOf(this);
        this.parent.children.splice(index, 1);
    }

    getClickedNode(clickedX, clickedY) {
        if (dist(this.x, this.y, clickedX, clickedY) < this.size / 2) {
            return this;
        }

        for (const child of this.children) {
            const clickedChildNode = child.getClickedNode(clickedX, clickedY);
            if (clickedChildNode) {
                return clickedChildNode;
            }
        }

        return null;
    }

    intersects(parentNode, otherNodeX, otherNodeY, otherNodeSize) {
        if (this != parentNode &&
            dist(this.x, this.y, otherNodeX, otherNodeY) <
            this.size / 2 + otherNodeSize / 2 + nodeBorder) {
            return true;
        }

        for (const child of this.children) {
            if (child.intersects(parentNode, otherNodeX, otherNodeY, otherNodeSize)) {
                return true;
            }
        }

        return false;
    }

    draw() {

        // branches
        stroke(139, 69, 19);
        strokeWeight(10);
        for (const child of this.children) {
            line(this.x, this.y, child.x, child.y);
        }

        // circle
        fill(0, this.g, 0);
        stroke(0, this.g * .9, 0);
        strokeWeight(4);
        circle(this.x, this.y, this.size);

        // children
        for (const child of this.children) {
            child.draw();
        }
    }
}