// 1. Create the canvas and set a background color
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(50); // Grey

}

// 2. Draw ellipses where the mouse is
function drawEllipses() {
  var radius = 20;

  // Draw ellipses at mouse position
  ellipse(mouseX, mouseY, radius, radius);

  // 4. Get fancy with drawing ellipses
  // Draw ellipses mirrored across the x-axis
  ellipse(width - mouseX, mouseY, radius, radius);
  
  // Draw ellipses mirrored across the y-axis
  ellipse(mouseX, height - mouseY, radius, radius);
  
  // Draw ellipses mirrored across both the x and y axes 
  ellipse(width - mouseX, height - mouseY, radius, radius);
}

// 3. Fill random color
function fillRandomColor() {
  // Select a random color
  var r = random(100, 255);
  var g = random(100, 255);
  var b = random(100, 255); 
  var randomColor = color(r,g,b); 

  fill(randomColor);
}

// 1. Draw ellipses
function draw() {
  fillRandomColor();

  if (mouseIsPressed) {
    drawEllipses();
  }
}
