var theta, len, root;

function setup() {
  createCanvas(1500, 800);
}

function draw() {
  background(51);
// Pick an angle according to the mouse location.
  theta = map(mouseX,0,width,0,PI/2);

// The first branch starts at the bottom of the window.
  translate(width/2, height);
  stroke(255);
  branch(250, 15);
}

function branch(len, root) {

  strokeWeight(root);
  line(0, 0, 0, -len);
  translate(0, -len);

// Each branch’s length shrinks by two-thirds.
  len *= 0.66;
  root *= 0.7;

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
