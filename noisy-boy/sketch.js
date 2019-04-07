// maybe change it into a water droplet?
function setup() {
  createCanvas(500,300);
  frameRate(5);
}

function draw() {
  background(51);
  smooth();
  var radius = 100;
  var centX = 250;
  var centY = 150;
  var x, y;
  var noiseval = random(10);
  var radVariance, thisRadius, rad;
  // body
  fill(255);
  beginShape();
  for (var ang = 0; ang <= 360; ang += 20) {
    noiseval += 0.2;
    radVariance = map(noise(noiseval), 0, 1, 0, 30);
    thisRadius = radius + radVariance;
    rad = radians(ang);
    x = centX + (thisRadius * cos(rad));
    y = centY + (thisRadius * sin(rad));
    curveVertex(x,y);
  }
endShape(CLOSE);
// face
fill(51);
ellipse(centX - 50, centY, 16, 16);
ellipse(centX + 50, centY, 16, 16);
noFill();
beginShape();
curveVertex(centX - 50, centY);
curveVertex(centX - 25, centY + 20);
curveVertex(centX, centY + 25);
curveVertex(centX + 25, centY + 20);
curveVertex(centX + 50, centY);
endShape();
}
