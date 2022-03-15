function displaywave(sizeOfball, angle, colortracker, rgbSetStrokeMovers, rgbSetFillMovers,
  stroke_WeightMovers) {
  for (let x = 0; x <= width; x += sizeOfball) {
    let y = map(sin(angle), -1, 1, 0, height);
    // stroke(164);
    // fill(255, 50);
    // stroke(ballStroke.red, ballStroke.green, ballStroke.blue);
    // fill(ballFill.red, ballFill.green, ballFill.blue);
    // strokeWeight(ballStrokeWeight);

    stroke(rgbSetStrokeMovers[colortracker].red, rgbSetStrokeMovers[colortracker].green, rgbSetStrokeMovers[colortracker].blue);
    fill(rgbSetFillMovers[colortracker].red, rgbSetFillMovers[colortracker].green, rgbSetFillMovers[colortracker].blue);
    strokeWeight(stroke_WeightMovers[colortracker]);
    ellipse(x, y, ellipse_width, ellipse_height);
    angle += angleVel;

    //increment color tracker
    //normally I would simply use the index i of for loop
    //but for the wave, the loop is weaponizing x
    //so maintaining my own array index
    colortracker++;
  }
}

function displaywaveWithAngleandSpeed(sizeOfball, angle, colortracker, rgbSetStrokeMovers, rgbSetFillMovers,
  stroke_WeightMovers, angleVel) {
  for (let x = 0; x <= width; x += sizeOfball) {
    let y = map(sin(angle), -1, 1, 0, height);
    // stroke(164);
    // fill(255, 50);
    // stroke(ballStroke.red, ballStroke.green, ballStroke.blue);
    // fill(ballFill.red, ballFill.green, ballFill.blue);
    // strokeWeight(ballStrokeWeight);

    stroke(rgbSetStrokeMovers[colortracker].red, rgbSetStrokeMovers[colortracker].green, rgbSetStrokeMovers[colortracker].blue);
    fill(rgbSetFillMovers[colortracker].red, rgbSetFillMovers[colortracker].green, rgbSetFillMovers[colortracker].blue);
    strokeWeight(stroke_WeightMovers[colortracker]);
    ellipse(x, y, ellipse_width, ellipse_height);
    angle += angleVel;

    //increment color tracker
    //normally I would simply use the index i of for loop
    //but for the wave, the loop is weaponizing x
    //so maintaining my own array index
    colortracker++;
  }
}