class Game {
  constructor() {
    this.roulette = new Roulette();
    this.screen = "fixedWheel";
  }

  setup() {
    document.getElementById("spinnbutton").addEventListener("click", () => {
      this.spin(); // arrow functions: this is equal to the context where it is defined. other fct                this is equal to the context where its called
    });
  }

  draw() {
    if (this.screen === "fixedWheel") {
      fill("#f56c42");
      noStroke();
      triangle(-50, -250, 0, -200, 50, -250);
      this.roulette.draw();
    } else if (this.screen === "spinWheel") {
      this.roulette.spin();
    }
  }

  spin() {
    this.screen = "spinWheel";
    setTimeout(() => {
      this.screen = "stoppedWheel";
      this.question = new Question(roulette.getTheChosenCategory());
      this.question.getQuestion();
      this.question.draw();
    }, 5000);
  }
}
