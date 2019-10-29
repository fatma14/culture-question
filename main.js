let myFont;
const roulette = new Roulette();

let started = false;
function preload() {
  myFont = loadFont("asset/Remachine.ttf");
}

function setup() {
  createCanvas(800, 800, WEBGL);
  ellipseMode(CENTER);
  textFont(myFont);
  textSize(35);
  fill("#f56c42");
  noStroke();
  triangle(-50, -250, 0, -200, 50, -250);
  roulette.draw();
}

function draw() {
  if (started) {
    roulette.spin();
  }
}

document.getElementById("spinnbutton").addEventListener("click", start);

function start() {
  started = true;

  setTimeout(function() {
    started = false;
  }, 4000);

  setTimeout(function() {
    question.getQuestion();
  }, 4500);
}
const question = new Question("Geo");
