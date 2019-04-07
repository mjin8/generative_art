// maybe do something that simulates magnets instead?

var maxRadius = 50;
var minRadius = 3;
var mouseRect = 30;
var currentCount = 0;
var x = [];
var y = [];
var r = [];
var closestIndex = [];

function setup() {
    createCanvas(800, 800);
    noFill();
    background(51);

    //var x[0] = 200;
    //var y[0] = 200;
    //var r[0] = 50;
    //var closestIndex[0] = 0;
}

function draw() {

    var newX = random(0+maxRadius, width-maxRadius);
    var newY = random(0+maxRadius, height-maxRadius);
    var newR = minRadius;

    if(mouseIsPressed) {
        newX = random(mouseX-mouseRect/2, mouseX+mouseRect/2);
        newY = random(mouseY-mouseRect/2, mouseY+mouseRect/2);
        newR = 1;
    }

    var intersection = false;

    for(var i = 0; i < currentCount; i++) {
        var d = dist(newX, newY, x[i], y[i]);
        if(d < (newR + r[i])) {
            intersection = true;
            break;
        }
    }

    if(intersection == false) {
        var newRadius = width;
        for(var i = 0; i < currentCount; i++) {
            var d = dist(newX, newY, x[i], y[i]);
            if(newRadius > d-r[i]) {
                newRadius = d-r[i];
                closestIndex[currentCount] = i;
            }
        }
        if(newRadius > maxRadius) {
            newRadius = maxRadius;
        }
        x[currentCount] = newX;
        y[currentCount] = newY;
        r[currentCount] = newRadius;
        currentCount++;
    }
    for(var i = 0; i < currentCount; i++) {
        fill(20, 120, 200, 80);
        ellipse(x[i], y[i], r[i]*2, r[i]*2);
        var n = closestIndex[i];
        stroke(220);
        strokeWeight(0.5);
        line(x[i], y[i], x[n], y[n]);
    }
}


