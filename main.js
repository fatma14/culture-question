let myFont;
//const roulette = new Roulette();
const game = new Game();

function preload() {
  myFont = loadFont("asset/Remachine.ttf");
}

function setup() {
  const canvas = createCanvas(600, 600, WEBGL);
  canvas.parent("canvas-container");
  ellipseMode(CENTER);
  textFont(myFont);
  textSize(35);
  game.setup();
}

function draw() {
  game.draw();
}
