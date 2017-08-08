# hth-javascript
Steps for p5.js project


Open Processing

https://www.openprocessing.org/sketch/442863

- Javascript library called p5.js


## Project Steps 
1. Create canvas and set background color

```
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(50); // Grey
}
```

2. Draw function: 

```
var radius = 20;

// Draw ellipses at mouse position
ellipse(mouseX, mouseY, radius, radius);
```

3. Fill random color

```
function fillRandomColor() {
  // Select a random color
  var r = random(100, 255);
  var g = random(100, 255);
  var b = random(100, 255); 
  var randomColor = color(r,g,b); 

  fill(randomColor);
}
```

4. Get fancy w/ drawing ellipses 
- Move into a function

```
  // Draw ellipses mirrored across the x-axis
  ellipse(width - mouseX, mouseY, radius, radius);
  
  // Draw ellipses mirrored across the y-axis
  ellipse(mouseX, height - mouseY, radius, radius);
  
  // Draw ellipses mirrored across both the x and y axes 
  ellipse(width - mouseX, height - mouseY, radius, radius);
```
