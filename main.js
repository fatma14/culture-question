let myFont;
//const roulette = new Roulette();
const game = new Game();

function preload() {
  myFont = loadFont("asset/Remachine.ttf");
}

function setup() {
  createCanvas(800, 800, WEBGL);
  ellipseMode(CENTER);
  textFont(myFont);
  textSize(35);
  game.setup();
}

function draw() {
  game.draw();
}
