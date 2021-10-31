let fill_ellipse_color_x = 155;
let fill_ellipse_color_y = 51;
let fill_ellipse_color_z = 200;

let ellipse_width = 64
let ellipse_height = 64

let xoff = 0;
let xincrement = 0.02;

let yoff = 0;
let yincrement = 0.03;

let xoff2 = 0;
let xincrement2 = 0.03;

let yoff2 = 0;
let yincrement2 = 0.01;

const returnNoise = function (offset) {

    var returnNoiseValue = 0;

    //returnNoiseValue = random(0,width);  // Try this line instead of noise
    //the random function can also be used
    //but we need a more natural random behavior
    //that is why we use perlin noise.

    returnNoiseValue = noise(offset);

    return returnNoiseValue;
}

const returnAfterMap = function (widthOrHeight, noiseValue) {

    var MapValue = 0;

    if (widthOrHeight == 'width') {
        MapValue = map(noiseValue, 0, 1, 0, width);
    }
    else {
        MapValue = map(noiseValue, 0, 1, 0, height);
    }

    return MapValue;

}

const returnCoOrdinate = function (offset, widthOrHeight) {

    let noiseValue = returnNoise(offset);

    let CoOrdinateVallue = returnAfterMap(widthOrHeight, noiseValue)

    return CoOrdinateVallue;
}

const drawEllipse = function (x, y, ellipseWidth, ellipseHeight, randomColor) {
    if (randomColor == true) {
        let r = random(0,255);
        let g = random(0,255);
        let b = random(0,255);
        fill(r,g,b)
    }
    ellipse(x, y, ellipseWidth, ellipseHeight);

}

