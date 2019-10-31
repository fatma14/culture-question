class Game {
  constructor() {
    this.roulette = new Roulette();
    this.screen = "";
    this.player1 = new Player();
    this.player2 = new Player();
    this.turn = Math.floor(Math.random() + 1);
    this.turnNumber = 0;
  }

  setup() {
    document.getElementById("spinnbutton").addEventListener("click", () => {
      this.spin(); // arrow functions: this is equal to the context where it is defined. other fct this is equal to the context where its called
    });
    document
      .getElementById("startPageNextButton")
      .addEventListener("click", () => {
        document.getElementById("startPage").style.display = "none";
        this.screen = "fixedWheel";
        document.getElementById("nextPage").style.display = "block";
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

  getPlayerTurn() {
    this.turnNumber += 1;
    if (this.turn === 1) {
      return this.player1;
    } else if (this.turn === 2) {
      return this.player2;
    }
  }

  endPlayerTurn() {
    if (this.turn === 1) {
      this.turn = 2;
    } else if (this.turn === 2) {
      this.turn = 1;
    }
  }

  onQuestionAnswered(isCorrect) {
    const chosenPlayer = this.getPlayerTurn();
    if (isCorrect) {
      chosenPlayer.score += 5;
    }
    this.endPlayerTurn();
    this.question.remove();
    this.roulette.reinitialise();
    if (this.isGameFinished()) {
      noCanvas();
      const winner =
        this.player1.score > this.player2.score ? this.player1 : this.player2;
      createDiv(`The winner is ${winner.name}`);
    }
  }

  spin() {
    this.screen = "spinWheel";
    setTimeout(() => {
      this.screen = "stoppedWheel";
      this.question = new Question(
        this.roulette.getTheChosenCategory(),
        this.onQuestionAnswered.bind(this)
      );
      this.question.getQuestion();
      this.question.draw();
    }, 1000);
  }

  isGameFinished() {
    return this.turnNumber === 4;
  }
}
