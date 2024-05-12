let video;
var colorPicker;
let c;
var colorAPI;
let splitColor;

// var w = window.innerWidth;
// var h = window.innerHeight;

var w = windowWidth;
var h = windowHeight;

function setup() {
  // video = createCapture(VIDEO); //front-camera

  video = createCapture({
    //back-camera
    audio: false,
    video: {
      facingMode: {
        exact: "environment",
      },
    },
  });

  video.hide();
  // createCanvas(800, 600);
  createCanvas(windowWidth, 600);
  // fill(255, 0, 0);
  // loadJSON('https://www.thecolorapi.com/id?rgb=rgb(${splitColor[0]},${splitColor[1]},${splitColor[2]})', gotData);

  colorPicker = new iro.ColorPicker("#picker", {
    // Set the size of the color picker
    width: 320,
    // Set the initial color to pure red
    color: "#ff0000",

    layout: [
      {
        // component: iro.ui.Wheel,
      },
      {
        // component: iro.ui.Slider,
      },
    ],
  });

  colorPicker.on("input:end", function (color) {
    // Handle color change event
    // You can use color.rgb or color.hex() to get the selected color
    console.log(color.hexString); // Print color hex value to console
  });
}

function draw() {
  image(video, 0, 0, width, height * 0.7);

  //convert to string
  // colorPicker.color = get(mouseX, mouseY).toString('#rrggbb');

  colorPicker.color = get(width * 0.5, height * 0.35).toString("#rrggbb");
  stroke("white");
  strokeWeight(3);
  line(
    windowWidth * 0.5,
    windowHeight * 0.29,
    windowWidth * 0.5,
    windowHeight * 0.41
  );
  line(
    windowWidth * 0.4,
    windowHeight * 0.35,
    windowWidth * 0.6,
    windowHeight * 0.35
  );
  // ellipse(width*0.35, height*0.35, 80, 80);
  console.log(colorPicker.color + " - rgba data");
  splitColor = colorPicker.color.split(",");
  console.log(splitColor);
  c = color(splitColor[0], splitColor[1], splitColor[2]);
  fill(c);
  console.log(splitColor[0] + " - red value");
  let url =
    "https://www.thecolorapi.com/id?rgb=rgb(" +
    splitColor[0] +
    "," +
    splitColor[1] +
    "," +
    splitColor[2] +
    ")";
  console.log(url);
  loadJSON(url, gotData);

  drawColorScale();
  drawGrayScale();

  // loadJSON('https://www.thecolorapi.com/id?rgb=rgb(splitColor[0],splitColor[1],splitColor[2])', gotData);
  ///id?rgb=rgb(255,0,0)
  //javascript string
  ///id?rgb=rgb(255,0,0) or /id?rgb=20,43,55

  fill(c);
  rect(width * 0.363, 430, 270, 150);

  textSize(20);
  fill("white");
  rect(windowWidth*0.1, windowHeight*0.8, 277, 150); // text background
  fill("black"); // fixed color for the text
  // text ("RGBA Value:  " + colorPicker.color, 30, 500)
  if (colorAPI) {
    text("Color: " + colorAPI.name.value, 10, 480);
    text(
      "RGB: (" +
        splitColor[0] +
        "," +
        splitColor[1] +
        "," +
        splitColor[2] +
        ")",
      +10,
      530
    );
  }

  // rect (10,10, 100, 20)
  //if (splitColor[0] <= 255 && splitColor[1] = 0) {
  //  ellipse (splitColor[2],10,30,30)
  //}

  // map(splitColor[0], 0, 255, 0, 33)
  // map(splitColor[1], 0, 255, 33, 66)
  //map(splitColor[2], 0, 255, 66, 100)

  // colorMode(HSB, 200);

  //  -Find max 2 colors and ignore min color value
  // (That gives me the 1/3rd of the slider)
  // -Then find the higher of the 2 remaining values and treat it as 255 (That gives you the half of the current third you will use for mapping)
  // -Use the remaining value as my mapping variable

  // Example:
  // (200, 59, 120)
  // I'll keep R and B and ignoring G, that sets the position to be the first third
  // Out of the two remaining values we will find the max and treat it as 255 (since there is no in-between for the slider where both are 0-255), this sets the half of the third where I can do my mapping
  // I use the remaining value as my mapping
  // So (B, 0, 255, first third/2, first third)

  // for (let x = 0; x < 255; x += 2) {
  //   for (let y = 530; y < 580; y += 1) {
  //     stroke(x, y, 200);
  //     point(x, y);
  //     noStroke();
  //     stroke("white");
  //     line(10, 530, 10, 580);
  //   }
  // }

  //   for (let x = 0; x < 255; x += 2) {
  //   for (let y = 0; y < 255; y += 1) {
  //     stroke(x, y, 200);
  //     point(x, y);
  //   }
  // }

  //Let newX = 10;
  //Let newY = 430;
  //X < 200+newX
  //y < 200+newY
}

function gotData(data) {
  console.log(data);
  colorAPI = data;
}

function drawColorScale() {
  // global variable for y position of rect();
  noStroke();

  fill(255, 0, 0);
  rect(0, 40, windowWidth, 50);
  noStroke();

  fill(255, 17, 0);
  rect(w * 0.01, 40, windowWidth, 50);
  noStroke();

  fill(255, 30, 0);
  rect(w * 0.02, 40, windowWidth, 50);
  noStroke();

  fill(255, 47, 0);
  rect(w * 0.03, 40, windowWidth, 50);
  noStroke();

  fill(255, 59, 0);
  noStroke();
  rect(w * 0.04, 40, windowWidth, 50);

  fill(255, 77, 0);
  noStroke();
  rect(w * 0.05, 40, windowWidth, 50);

  //
  fill(255, 94, 0);
  noStroke();
  rect(w * 0.06, 40, windowWidth, 50);

  fill(255, 106, 0);
  noStroke();
  rect(w * 0.07, 40, windowWidth, 50);

  fill(255, 123, 0);
  noStroke();
  rect(w * 0.08, 40, windowWidth, 50);

  fill(255, 136, 0);
  noStroke();
  rect(w * 0.09, 40, windowWidth, 50);

  fill(255, 153, 0);
  noStroke();
  rect(w * 0.1, 40, windowWidth, 50);

  fill(255, 170, 0);
  noStroke();
  rect(w * 0.11, 40, windowWidth, 50);

  //
  fill(255, 183, 0);
  noStroke();
  rect(w * 0.12, 40, windowWidth, 50);

  fill(255, 200, 0);
  noStroke();
  rect(w * 0.13, 40, windowWidth, 50);

  fill(255, 213, 0);
  noStroke();
  rect(w * 0.14, 40, windowWidth, 50);

  fill(255, 230, 0);
  noStroke();
  rect(w * 0.15, 40, windowWidth, 50);

  fill(255, 247, 0);
  noStroke();
  rect(w * 0.16, 40, windowWidth, 50);

  fill(251, 255, 0);
  noStroke();
  rect(w * 0.17, 40, windowWidth, 50);

  //
  fill(234, 255, 0);
  noStroke();
  rect(w * 0.18, 40, windowWidth, 50);

  fill(221, 255, 0);
  noStroke();
  rect(w * 0.19, 40, windowWidth, 50);

  fill(204, 255, 0);
  noStroke();
  rect(w * 0.2, 40, windowWidth, 50);

  fill(187, 255, 0);
  noStroke();
  rect(w * 0.21, 40, windowWidth, 50);

  fill(174, 255, 0);
  noStroke();
  rect(w * 0.22, 40, windowWidth, 50);

  fill(157, 255, 0);
  noStroke();
  rect(w * 0.23, 40, windowWidth, 50);

  //
  fill(145, 255, 0);
  noStroke();
  rect(w * 0.24, 40, windowWidth, 50);

  fill(128, 255, 0);
  noStroke();
  rect(w * 0.25, 40, windowWidth, 50);

  fill(111, 255, 0);
  noStroke();
  rect(w * 0.26, 40, windowWidth, 50);

  fill(98, 255, 0);
  noStroke();
  rect(w * 0.27, 40, windowWidth, 50);

  fill(81, 255, 0);
  noStroke();
  rect(w * 0.28, 40, windowWidth, 50);

  fill(68, 255, 0);
  noStroke();
  rect(w * 0.29, 40, windowWidth, 50);

  //
  fill(51, 255, 0);
  noStroke();
  rect(w * 0.3, 40, windowWidth, 50);

  fill(34, 255, 0);
  noStroke();
  rect(w * 0.31, 40, windowWidth, 50);

  fill(21, 255, 0);
  noStroke();
  rect(w * 0.32, 40, windowWidth, 50);

  fill(4, 255, 0);
  noStroke();
  rect(w * 0.33, 40, windowWidth, 50);

  fill(0, 255, 9);
  noStroke();
  rect(w * 0.34, 40, windowWidth, 50);

  fill(0, 255, 26);
  noStroke();
  rect(w * 0.35, 40, windowWidth, 50);

  //
  fill(0, 255, 43);
  noStroke();
  rect(w * 0.36, 40, windowWidth, 50);

  fill(0, 255, 55);
  noStroke();
  rect(w * 0.37, 40, windowWidth, 50);

  fill(0, 255, 72);
  noStroke();
  rect(w * 0.38, 40, windowWidth, 50);

  fill(0, 255, 85);
  noStroke();
  rect(w * 0.39, 40, windowWidth, 50);

  fill(0, 255, 102);
  noStroke();
  rect(w * 0.4, 40, windowWidth, 50);

  fill(0, 255, 119);
  noStroke();
  rect(w * 0.41, 40, windowWidth, 50);

  //
  fill(0, 255, 132);
  noStroke();
  rect(w * 0.42, 40, windowWidth, 50);

  fill(0, 255, 149);
  noStroke();
  rect(w * 0.43, 40, windowWidth, 50);

  fill(0, 255, 162);
  noStroke();
  rect(w * 0.44, 40, windowWidth, 50);

  fill(0, 255, 178);
  noStroke();
  rect(w * 0.45, 40, windowWidth, 50);

  fill(0, 255, 195);
  noStroke();
  rect(w * 0.46, 40, windowWidth, 50);

  fill(0, 255, 208);
  noStroke();
  rect(w * 0.47, 40, windowWidth, 50);

  //
  fill(0, 255, 225);
  noStroke();
  rect(w * 0.48, 40, windowWidth, 50);

  fill(0, 255, 238);
  noStroke();
  rect(w * 0.49, 40, windowWidth, 50);

  fill(0, 255, 255);
  noStroke();
  rect(w * 0.5, 40, windowWidth, 50);

  fill(0, 238, 255);
  noStroke();
  rect(w * 0.51, 40, windowWidth, 50);

  fill(0, 225, 255);
  noStroke();
  rect(w * 0.52, 40, windowWidth, 50);

  fill(0, 208, 255);
  noStroke();
  rect(w * 0.53, 40, windowWidth, 50);

  //
  fill(0, 195, 255);
  noStroke();
  rect(w * 0.54, 40, windowWidth, 50);

  fill(0, 178, 255);
  noStroke();
  rect(w * 0.55, 40, windowWidth, 50);

  fill(0, 162, 255);
  noStroke();
  rect(w * 0.56, 40, windowWidth, 50);

  fill(0, 149, 255);
  noStroke();
  rect(w * 0.57, 40, windowWidth, 50);

  fill(0, 132, 255);
  noStroke();
  rect(w * 0.58, 40, windowWidth, 50);

  fill(0, 119, 255);
  noStroke();
  rect(w * 0.59, 40, windowWidth, 50);

  //
  fill(0, 102, 255);
  noStroke();
  rect(w * 0.6, 40, windowWidth, 50);

  fill(0, 85, 255);
  noStroke();
  rect(w * 0.61, 40, windowWidth, 50);

  fill(0, 72, 255);
  noStroke();
  rect(w * 0.62, 40, windowWidth, 50);

  fill(0, 55, 255);
  noStroke();
  rect(w * 0.63, 40, windowWidth, 50);

  fill(0, 43, 255);
  noStroke();
  rect(w * 0.64, 40, windowWidth, 50);

  fill(0, 26, 255);
  noStroke();
  rect(w * 0.65, 40, windowWidth, 50);

  //
  fill(0, 9, 255);
  noStroke();
  rect(w * 0.66, 40, windowWidth, 50);

  fill(4, 0, 255);
  noStroke();
  rect(w * 0.67, 40, windowWidth, 50);

  fill(21, 0, 255);
  noStroke();
  rect(w * 0.68, 40, windowWidth, 50);

  fill(34, 0, 255);
  noStroke();
  rect(w * 0.69, 40, windowWidth, 50);

  fill(51, 0, 255);
  noStroke();
  rect(w * 0.7, 40, windowWidth, 50);

  fill(68, 0, 255);
  noStroke();
  rect(w * 0.71, 40, windowWidth, 50);

  //
  fill(81, 0, 255);
  noStroke();
  rect(w * 0.72, 40, windowWidth, 50);

  fill(98, 0, 255);
  noStroke();
  rect(w * 0.73, 40, windowWidth, 50);

  fill(111, 0, 255);
  noStroke();
  rect(w * 0.74, 40, windowWidth, 50);

  fill(128, 0, 255);
  noStroke();
  rect(w * 0.75, 40, windowWidth, 50);

  fill(145, 0, 255);
  noStroke();
  rect(w * 0.76, 40, windowWidth, 50);

  fill(157, 0, 255);
  noStroke();
  rect(w * 0.77, 40, windowWidth, 50);

  //
  fill(174, 0, 255);
  noStroke();
  rect(w * 0.78, 40, windowWidth, 50);

  fill(187, 0, 255);
  noStroke();
  rect(w * 0.79, 40, windowWidth, 50);

  fill(204, 0, 255);
  noStroke();
  rect(w * 0.8, 40, windowWidth, 50);

  fill(221, 0, 255);
  noStroke();
  rect(w * 0.81, 40, windowWidth, 50);

  fill(234, 0, 255);
  noStroke();
  rect(w * 0.82, 40, windowWidth, 50);

  fill(251, 0, 255);
  noStroke();
  rect(w * 0.83, 40, windowWidth, 50);

  //
  fill(255, 0, 247);
  noStroke();
  rect(w * 0.84, 40, windowWidth, 50);

  fill(255, 0, 230);
  noStroke();
  rect(w * 0.85, 40, windowWidth, 50);

  fill(255, 0, 213);
  noStroke();
  rect(w * 0.86, 40, windowWidth, 50);

  fill(255, 0, 200);
  noStroke();
  rect(w * 0.87, 40, windowWidth, 50);

  fill(255, 0, 183);
  noStroke();
  rect(w * 0.88, 40, windowWidth, 50);

  fill(255, 0, 170);
  noStroke();
  rect(w * 0.89, 40, windowWidth, 50);

  //
  fill(255, 0, 153);
  noStroke();
  rect(w * 0.9, 40, windowWidth, 50);

  fill(255, 0, 136);
  noStroke();
  rect(w * 0.91, 40, windowWidth, 50);

  fill(255, 0, 123);
  noStroke();
  rect(w * 0.92, 40, windowWidth, 50);

  fill(255, 0, 106);
  noStroke();
  rect(w * 0.93, 40, windowWidth, 50);

  fill(255, 0, 94);
  noStroke();
  rect(w * 0.94, 40, windowWidth, 50);

  fill(255, 0, 77);
  noStroke();
  rect(w * 0.95, 40, windowWidth, 50);

  //
  fill(255, 0, 59);
  noStroke();
  rect(w * 0.96, 40, windowWidth, 50);

  fill(255, 0, 47);
  noStroke();
  rect(w * 0.97, 40, windowWidth, 50);

  fill(255, 0, 30);
  noStroke();
  rect(w * 0.98, 40, windowWidth, 50);

  fill(255, 0, 17);
  noStroke();
  rect(w * 0.99, 40, windowWidth, 50);

  keyPressed();

  if (splitColor[0] >= 100 && splitColor[1] <= 100 && splitColor[2] <= 100) {
    //red
    noFill();
    stroke(color(0, 0, 0));
    strokeWeight(5);
    rect(w * 0.005, 40, windowWidth * 0.137, 52);
    noStroke();
  } else if (
    splitColor[0] <= 255 &&
    splitColor[0] >= 130 &&
    splitColor[1] <= 250 &&
    splitColor[1] >= 80 &&
    splitColor[2] <= 190
  ) {
    // yellow orange
    noFill();
    stroke(color(0, 0, 0));
    strokeWeight(5);
    rect(w * 0.145, 40, windowWidth * 0.04, 52);
    noStroke();
  } else if (
    splitColor[0] <= 120 &&
    splitColor[0] >= 20 &&
    splitColor[1] <= 215 &&
    splitColor[1] >= 90 &&
    splitColor[2] <= 160
  ) {
    // green
    noFill();
    stroke(color(0, 0, 0));
    strokeWeight(5);
    rect(w * 0.2, 40, windowWidth * 0.25, 52);
    noStroke();
  } else if (
    splitColor[0] <= 100 &&
    splitColor[0] >= 0 &&
    splitColor[1] <= 190 &&
    splitColor[1] >= 30 &&
    splitColor[2] >= 80
  ) {
    //blue
    noFill();
    stroke(color(0, 0, 0));
    strokeWeight(5);
    rect(w * 0.485, 40, windowWidth * 0.23, 52);
    noStroke();

  } else if (
    splitColor[0] >= 180 &&
    splitColor[0] <= 250 &&
    splitColor[1] >= 150 &&
    splitColor[1] <= 200 &&
    splitColor[2] >= 140
  ) {
    //pink
    noFill();
    stroke(color(0, 0, 0));
    strokeWeight(5);
    rect(w * 0.9, 40, windowWidth * 0.1, 49);
    noStroke();
  } else if (
    splitColor[0] >= 50 &&
    splitColor[0] <= 200 &&
    splitColor[1] >= 5 &&
    splitColor[1] <= 110 &&
    splitColor[2] <= 135 &&
    splitColor[2] >= 70
  ) {
    //purple
    noFill();
    stroke(color(0, 0, 0));
    strokeWeight(5);
    rect(w * 0.72, 40, windowWidth * 0.15, 52);
    noStroke();
  }


  // else if purple
  // else if pink

  // rect(w*0.001, 20, windowWidth * 0.15, 50);
}

function drawGrayScale() {
  // global variable for y position of rect();
  noStroke();

  fill(255, 255, 255);
  rect(0, 0, windowWidth, 35);
  noStroke();

  fill(191, 191, 191);
  rect(w * 0.2, 0, windowWidth, 35);
  noStroke();

  fill(127, 127, 127);
  rect(w * 0.4, 0, windowWidth, 35);
  noStroke();

  fill(64, 64, 64);
  rect(w * 0.6, 0, windowWidth, 35);
  noStroke();

  fill(0, 0, 0);
  noStroke();
  rect(w * 0.8, 0, windowWidth, 35);
}

//

function windowResized() {
  // assigns new values for width and height variables
  // w = window.innerWidth;
  // h = window.innerHeight;
  w = windowWidth;
  h = windowHeight;
  resizeCanvas(w, h);
};

function keyPressed() {
  if (key === "s" || key === "S") {
    console.log("s is pressed");
  } else {
    noStroke();
  }
  return false;
}

// https://p5js.org/reference/#/p5/colorMode

// function keyPressed() {
//   if (value === 0) {
//     value = 255;
//   } else {
//     value = 0;
//   }
// }
