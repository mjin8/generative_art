var theta, len, root, opacity, size;
var noiseVal = 0;
var sizeNoise = 100;

function setup() {
  createCanvas(1500, 800);
}

function draw() {
  background(51);
  r = map(mouseX * 10, 0, width * 10, 0, 255);
  g = map(mouseY, 0, height, 0, 255);
  noiseVal += 0.02;
  b = map(noise(noiseVal), 0 , 1, 0, 255);
  // opacity = map(noise(noiseVal), 0 , 1, 0, 255);
// Pick an angle according to the mouse location.
  theta = map(mouseX,0,width,0,PI/2);
  sizeNoise += 0.01;
  size = map(noise(sizeNoise), 0, 1, 100, 400);
// The first branch starts at the bottom of the window.
  translate(width/2, height);
  stroke(255, 255, 255, 127);
  fill(r, g, b, 127);
  branch(size, 5);
}

function branch(len, root) {

  strokeWeight(root);
  ellipse(0, 0, len, len);
  translate(40, -len);

// Each branch’s length shrinks by two-thirds.
  len *= 0.66;
  root *= 0.8;

  if (len > 2) {
    push();
    rotate(theta);
// Subsequent calls to branch() include the length argument.
    branch(len, root);
    pop();

    push();
    rotate(-theta);
    branch(len, root);
    pop();
  }
}
