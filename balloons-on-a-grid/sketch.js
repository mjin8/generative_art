var tileCount = 20;
var seed = 20;

function setup() {
  createCanvas(1920, 1080);
}

function draw() {
  background(255);
  smooth();

  randomSeed(seed);

  translate(width/tileCount/2, height/tileCount/2);

  //fill(color(mouseX, mouseY, random(255)));

  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {

      var posX = width / tileCount * gridX + random(mouseX/10);
      var posY = height / tileCount * gridY + random(mouseY/10);

      var shiftX = random(-mouseX, mouseX) / 20;
      var shiftY = random(-mouseX, mouseX) / 20;

      push();
      stroke(60, 60, 60, 100);
      line(posX + shiftX, posY + shiftY, mouseX, mouseY);
      noStroke();
      fill(color(random(255), mouseX - random(mouseY), mouseY - random(mouseX), 150));
      ellipse(posX + shiftX, posY + shiftY, mouseX / 50, mouseX / 50);
      ellipse(posX + shiftX, posY + shiftY, mouseX / 40, mouseX / 40);
      ellipse(posX + shiftX, posY + shiftY, mouseX / 30, mouseX / 30);
      ellipse(posX + shiftX, posY + shiftY, mouseX / 20, mouseX / 20);
      ellipse(posX + shiftX, posY + shiftY, mouseX / 10, mouseX / 10);
      //ellipse(posX + shiftX, posY + shiftY, mouseX / 4, mouseX / 4);
      //ellipse(random(-10, mouseX/20)+ posX, random(-10,mouseY/20)+ posY, mouseX/4, mouseX/);
      pop();


    }
  }

}



