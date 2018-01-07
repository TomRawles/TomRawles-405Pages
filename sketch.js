let r = 255; // Defines the variable "r" as having a starting value of 255
let g = 255; // Defines the variable "g" as having a starting value of 255
let b = 255; // Defines the variable "b" as having a starting value of 255
let r2 = 255; // Defines the variable "r2" as having a starting value of 255
let g2 = 255; // Defines the variable "g2" as having a starting value of 255
let b2 = 255; // Defines the variable "b2" as having a starting value of 255
let r3 = 255; // Defines the variable "r3" as having a starting value of 255
let g3 = 255; // Defines the variable "g3" as having a starting value of 255
let b3 = 255; // Defines the variable "b3" as having a starting value of 255
let r4 = 255; // Defines the variable "r4" as having a starting value of 255
let g4 = 255; // Defines the variable "g4" as having a starting value of 255
let b4 = 255; // Defines the variable "b4" as having a starting value of 255
let r5 = 255; // Defines the variable "r5" as having a starting value of 255
let g5 = 255; // Defines the variable "g5" as having a starting value of 255
let b5 = 255; // Defines the variable "b5" as having a starting value of 255
let r6 = 255; // Defines the variable "r6" as having a starting value of 255
let g6 = 255; // Defines the variable "g6" as having a starting value of 255
let b6 = 255; // Defines the variable "b6" as having a starting value of 255

let speed = 3; // Defines that the variable "speed" has a starting value of 3
let change = 2; // Defines that the variable "change" has a starting value of 2
let diameter; // Creates the variable "diameter"
let d2; // Creates the variable "d2"
let x1; // Creates the variable "x1"
let y1; // Creates the variable "y1"
let x3; // Creates the variable "x3"
let y3; // Creates the variable "y3"
let d3; // Creates the variable "d3"
let x5; // Creates the variable "x5"
let y5; // Creates the variable "y5"
let d4; // Creates the variable "d4"
let x7; // Creates the variable "x7"
let y7; // Creates the variable "y7"
let d5; // Creates the variable "d5"
let x9; // Creates the variable "x9"
let y9; // Creates the variable "y9"
let d6; // Creates the variable "d6"
let x11; // Creates the variable "x11"
let y11; // Creates the variable "y11"

function setup() {
  noStroke(); // Defines that there will be no stroke around the circles
  createCanvas(594, 841); // Defines that the canvas will be 594 pixels wide and 841 pixels tall
  x1 = random(0, 594); // Defines that the variable "x1" will be a random number between 0 and 594
  y1 = random(0, 841); // Defines that the variable "y1" will be a random number between 0 and 841
  x3 = random(0, 594); // Defines that the variable "x3" will be a random number between 0 and 594
  y3 = random(0, 841); // Defines that the variable "y3" will be a random number between 0 and 841
  x5 = random(0, 594); // Defines that the variable "x5" will be a random number between 0 and 594
  y5 = random(0, 841); // Defines that the variable "y5" will be a random number between 0 and 841
  x7 = random(0, 594); // Defines that the variable "x7" will be a random number between 0 and 594
  y7 = random(0, 841); // Defines that the variable "y7" will be a random number between 0 and 841
  x9 = random(0, 594); // Defines that the variable "x9" will be a random number between 0 and 594
  y9 = random(0, 841); // Defines that the variable "y9" will be a random number between 0 and 841
  x11 = random(0, 594); // Defines that the variable "x11" will be a random number between 0 and 594
  y11 = random(0, 841); // Defines that the variable "y11" will be a random number between 0 and 841
  diameter = 30; // Defines that the variable "diameter" will have a value of 30
  d2 = 30; // Defines that the variable "d2" will have a value of 30
  d3 = 30; // Defines that the variable "d3" will have a value of 30
  d4 = 30; // Defines that the variable "d4" will have a value of 30
  d5 = 30; // Defines that the variable "d5" will have a value of 30
  d6 = 30; // Defines that the variable "d6" will have a value of 30
  background(200); // Defines that the background of the canvas will have an alpha value of 200
}

function draw() {
  diameter += random(-change, change); // Defines that the value of "diameter" will change -2 or +2 from the previous value every time the canvas is drawn
  x1 += random(-speed, speed); //Defines that the value of "x1" will change -3 or +3 from the previous value every time the canvas is drawn
  y1 += random(-speed, speed); //Defines that the value of "y1" will change -3 or +3 from the previous value every time the canvas is drawn
  x1 = constrain(x1, 0, width); //Defines that the value of "x1" can not go below 0 or above the width of the entire canvas
  y1 = constrain(y1, 0, height); //Defines that the value of "y1" can not go below 0 or above the height of the entire canvas
  d2 += random(-change, change); // Defines that the value of "d2" will change -2 or +2 from the previous value every time the canvas is drawn
  x3 += random(-speed, speed); //Defines that the value of "x3" will change -3 or +3 from the previous value every time the canvas is drawn
  y3 += random(-speed, speed); //Defines that the value of "y3" will change -3 or +3 from the previous value every time the canvas is drawn
  x3 = constrain(x3, 0, width); //Defines that the value of "x3" can not go below 0 or above the width of the entire canvas
  y3 = constrain(y3, 0, height); //Defines that the value of "y3" can not go below 0 or above the height of the entire canvas
  d3 += random(-change, change); // Defines that the value of "d3" will change -2 or +2 from the previous value every time the canvas is drawn
  x5 += random(-speed, speed); //Defines that the value of "x5" will change -3 or +3 from the previous value every time the canvas is drawn
  y5 += random(-speed, speed); //Defines that the value of "y5" will change -3 or +3 from the previous value every time the canvas is drawn
  x5 = constrain(x5, 0, width); //Defines that the value of "x5" can not go below 0 or above the width of the entire canvas
  y5 = constrain(y5, 0, height); //Defines that the value of "y5" can not go below 0 or above the height of the entire canvas
  d4 += random(-change, change); // Defines that the value of "d4" will change -2 or +2 from the previous value every time the canvas is drawn
  x7 += random(-speed, speed); //Defines that the value of "x7" will change -3 or +3 from the previous value every time the canvas is drawn
  y7 += random(-speed, speed); //Defines that the value of "y7" will change -3 or +3 from the previous value every time the canvas is drawn
  x7 = constrain(x7, 0, width); //Defines that the value of "x7" can not go below 0 or above the width of the entire canvas
  y7 = constrain(y7, 0, height); //Defines that the value of "y7" can not go below 0 or above the height of the entire canvas
  d5 += random(-change, change); // Defines that the value of "d5" will change -2 or +2 from the previous value every time the canvas is drawn
  x9 += random(-speed, speed); //Defines that the value of "x9" will change -3 or +3 from the previous value every time the canvas is drawn
  y9 += random(-speed, speed); //Defines that the value of "y9" will change -3 or +3 from the previous value every time the canvas is drawn
  x9 = constrain(x9, 0, width); //Defines that the value of "x9" can not go below 0 or above the width of the entire canvas
  y9 = constrain(y9, 0, height); //Defines that the value of "y9" can not go below 0 or above the height of the entire canvas
  d6 += random(-change, change); // Defines that the value of "d6" will change -2 or +2 from the previous value every time the canvas is drawn
  x11 += random(-speed, speed); //Defines that the value of "x11" will change -3 or +3 from the previous value every time the canvas is drawn
  y11 += random(-speed, speed); //Defines that the value of "y11" will change -3 or +3 from the previous value every time the canvas is drawn
  x11 = constrain(x11, 0, width); //Defines that the value of "x11" can not go below 0 or above the width of the entire canvas
  y11 = constrain(y11, 0, height); //Defines that the value of "y11" can not go below 0 or above the height of the entire canvas

  let x2 = map(x1, 0, width, width, 0); // Defines that "x2" is the mirror image of "x1" along the x axis
  let y2 = map(y1, 0, height, height, 0); // Defines that "y2" is the mirror image of "y1" along the y axis

  let x4 = map(x3, 0, width, width, 0); // Defines that "x4" is the mirror image of "x3" along the x axis
  let y4 = map(y3, 0, height, height, 0); // Defines that "y4" is the mirror image of "y3" along the y axis

  let x6 = map(x5, 0, width, width, 0); // Defines that "x6" is the mirror image of "x5" along the x axis
  let y6 = map(y5, 0, height, height, 0); // Defines that "y6" is the mirror image of "y5" along the y axis

  let x8 = map(x7, 0, width, width, 0); // Defines that "x8" is the mirror image of "x7" along the x axis
  let y8 = map(y7, 0, height, height, 0); // Defines that "y8" is the mirror image of "y7" along the y axis

  let x10 = map(x9, 0, width, width, 0); // Defines that "x10" is the mirror image of "x9" along the x axis
  let y10 = map(y9, 0, height, height, 0); // Defines that "y10" is the mirror image of "y9" along the y axis

  let x12 = map(x11, 0, width, width, 0); // Defines that "x12" is the mirror image of "x12" along the x axis
  let y12 = map(y11, 0, height, height, 0); // Defines that "y12" is the mirror image of "y11" along the y axis

  if (diameter < 10) {
    diameter = diameter + 3;
  } // Defines that if "diameter" is less than 10, "diameter" is increased by 3
  if (d2 < 10) {
    d2 = d2 + 3;
  } // Defines that if "d2" is less than 10, "d2" is increased by 3
  if (d3 < 10) {
    d3 = d3 + 3;
  } // Defines that if "d3" is less than 10, "d3" is increased by 3
  if (d4 < 10) {
    d4 = d4 + 3;
  } // Defines that if "d4" is less than 10, "d4" is increased by 3
  if (d5 < 10) {
    d5 = d5 + 3;
  } // Defines that if "d5" is less than 10, "d5" is increased by 3
  if (d6 < 10) {
    d6 = d6 + 3;
  } // Defines that if "d6" is less than 10, "d6" is increased by 3




  if (mouseIsPressed) {
    r = random(255);
    g = random(255);
    b = random(255);
  } // Defines that the values for "r", "g" and "b" are a random number between 0 and 255
  if (mouseIsPressed) {
    r2 = random(255);
    g2 = random(255);
    b2 = random(255);
  } // Defines that the values for "r2", "g2" and "b2" are a random number between 0 and 255
  if (mouseIsPressed) {
    r3 = random(255);
    g3 = random(255);
    b3 = random(255);
  } // Defines that the values for "r3", "g3" and "b3" are a random number between 0 and 255
  if (mouseIsPressed) {
    r4 = random(255);
    g4 = random(255);
    b4 = random(255);
  } // Defines that the values for "r4", "g4" and "b4" are a random number between 0 and 255
  if (mouseIsPressed) {
    r5 = random(255);
    g5 = random(255);
    b5 = random(255);
  } // Defines that the values for "r5", "g5" and "b5" are a random number between 0 and 255
  if (mouseIsPressed) {
    r6 = random(255);
    g6 = random(255);
    b6 = random(255);
  } // Defines that the values for "r6", "g6" and "b6" are a random number between 0 and 255

  fill (r, g, b, 150); // Defines that the ellipses following this line of code will have RGB values of "r", "g" and "b" and an alpha of 150
  ellipse(x1, y1, diameter, diameter); // Defines that this ellipse starts at the coordinates "x1", "y1" which have previously been determined and is sized "diameter" pixels wide x "diameter" pixels tall which has also previously been determined
  ellipse(x2, y1, diameter, diameter); // Defines that this ellipse starts at the coordinates "x2", "y1" which have previously been determined and is sized "diameter" pixels wide x "diameter" pixels tall which has also previously been determined
  ellipse(x1, y2, diameter, diameter); // Defines that this ellipse starts at the coordinates "x1", "y2" which have previously been determined and is sized "diameter" pixels wide x "diameter" pixels tall which has also previously been determined
  ellipse(x2, y2, diameter, diameter); // Defines that this ellipse starts at the coordinates "x2", "y2" which have previously been determined and is sized "diameter" pixels wide x "diameter" pixels tall which has also previously been determined

  fill (r2, g2, b2, 150) // Defines that the ellipses following this line of code will have RGB values of "r2", "g2" and "b2" and an alpha of 150
  ellipse(x3, y3, d2, d2); // Defines that this ellipse has the coordinates "x3", "y3" which have previously been determined and is sized "d2" pixels wide x "d2" pixels tall which has also previously been determined
  ellipse(x4, y3, d2, d2); // Defines that this ellipse has the coordinates "x4", "y3" which have previously been determined and is sized "d2" pixels wide x "d2" pixels tall which has also previously been determined
  ellipse(x3, y4, d2, d2); // Defines that this ellipse has the coordinates "x3", "y4" which have previously been determined and is sized "d2" pixels wide x "d2" pixels tall which has also previously been determined
  ellipse(x4, y4, d2, d2); // Defines that this ellipse has the coordinates "x4", "y4" which have previously been determined and is sized "d2" pixels wide x "d2" pixels tall which has also previously been determined

  fill (r3, g3, b3, 150) // Defines that the ellipses following this line of code will have RGB values of "r3", "g3" and "b3" and an alpha of 150
  ellipse(x5, y5, d3, d3); // Defines that this ellipse has the coordinates "x5", "y5" which have previously been determined and is sized "d3" pixels wide x "d3" pixels tall which has also previously been determined
  ellipse(x6, y5, d3, d3); // Defines that this ellipse has the coordinates "x6", "y5" which have previously been determined and is sized "d3" pixels wide x "d3" pixels tall which has also previously been determined
  ellipse(x5, y6, d3, d3); // Defines that this ellipse has the coordinates "x5", "y6" which have previously been determined and is sized "d3" pixels wide x "d3" pixels tall which has also previously been determined
  ellipse(x6, y6, d3, d3); // Defines that this ellipse has the coordinates "x6", "y6" which have previously been determined and is sized "d3" pixels wide x "d3" pixels tall which has also previously been determined

  fill (r4, g4, b4, 150) // Defines that the ellipses following this line of code will have RGB values of "r4", "g4" and "b4" and an alpha of 150
  ellipse(x7, y7, d4, d4); // Defines that this ellipse has the coordinates "x7", "y7" which have previously been determined and is sized "d4" pixels wide x "d4" pixels tall which has also previously been determined
  ellipse(x8, y7, d4, d4); // Defines that this ellipse has the coordinates "x8", "y7" which have previously been determined and is sized "d4" pixels wide x "d4" pixels tall which has also previously been determined
  ellipse(x7, y8, d4, d4); // Defines that this ellipse has the coordinates "x7", "y8" which have previously been determined and is sized "d4" pixels wide x "d4" pixels tall which has also previously been determined
  ellipse(x8, y8, d4, d4); // Defines that this ellipse has the coordinates "x8", "y8" which have previously been determined and is sized "d4" pixels wide x "d4" pixels tall which has also previously been determined

  fill (r5, g5, b5, 150) // Defines that the ellipses following this line of code will have RGB values of "r5", "g5" and "b5" and an alpha of 150
  ellipse(x9, y9, d5, d5); // Defines that this ellipse has the coordinates "x9", "y9" which have previously been determined and is sized "d5" pixels wide x "d5" pixels tall which has also previously been determined
  ellipse(x10, y9, d5, d5); // Defines that this ellipse has the coordinates "x10", "y9" which have previously been determined and is sized "d5" pixels wide x "d5" pixels tall which has also previously been determined
  ellipse(x9, y10, d5, d5); // Defines that this ellipse has the coordinates "x9", "y10" which have previously been determined and is sized "d5" pixels wide x "d5" pixels tall which has also previously been determined
  ellipse(x10, y10, d5, d5); // Defines that this ellipse has the coordinates "x10", "y10" which have previously been determined and is sized "d5" pixels wide x "d5" pixels tall which has also previously been determined

  fill (r6, g6, b6, 150) // Defines that the ellipses following this line of code will have RGB values of "r6", "g6" and "b6" and an alpha of 150
  ellipse(x11, y11, d6, d6); // Defines that this ellipse has the coordinates "x11", "y11" which have previously been determined and is sized "d6" pixels wide x "d6" pixels tall which has also previously been determined
  ellipse(x12, y11, d6, d6); // Defines that this ellipse has the coordinates "x12", "y11" which have previously been determined and is sized "d6" pixels wide x "d6" pixels tall which has also previously been determined
  ellipse(x11, y12, d6, d6); // Defines that this ellipse has the coordinates "x11", "y12" which have previously been determined and is sized "d6" pixels wide x "d6" pixels tall which has also previously been determined
  ellipse(x12, y12, d6, d6); // Defines that this ellipse has the coordinates "x12", "y12" which have previously been determined and is sized "d6" pixels wide x "d6" pixels tall which has also previously been determined
}
