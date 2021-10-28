    //TODO - the tree is not proportional to width and height
    //note only the size is not proportional not the physical location
    const PlantFactorX = 0.6;
    const PlantFactorY = 1.5;
    plantX2 = RectangleX1 - RectangleX1 * PlantFactorX;
    plantY2 = RectangleY1 + RectangleY1 * PlantFactorY;
    plant2 = new Node(null, 50, random(200, 255), TAU * 0.75);
    strokeWeight(4);

    plant2.draw();
    plant2.maybeGrow();
    stroke(200, 0, 0);
    fill(128, 0, 0);
    quad(plantX2 - 50, plantY2,
        plantX2 + 50, plantY2,
        plantX2 + 25, plantY2 + 25,
        plantX2 - 25, plantY2 + 25);
    var NumberOfPlanLeaves = 25;

    for (plantloop = 0; plantloop < NumberOfPlanLeaves; plantloop++) {
        plant2.draw();
        plant2.maybeGrow();
    }