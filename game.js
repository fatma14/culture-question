class Game {
  constructor() {
    this.roulette = new Roulette();
    this.screen = "";
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
        document.getElementById("playersInput").style.display = "block";
      });

    document.getElementById("startGame").addEventListener("click", () => {
      const player1NameField = document.getElementById("player1-name");
      const player2NameField = document.getElementById("player2-name");

      player1NameField.addEventListener("input", () => {
        player1NameField.classList.remove("is-invalid");
      });
      player2NameField.addEventListener("change", () => {
        player2NameField.classList.remove("is-invalid");
      });

      const player1Name = player1NameField.value;
      const player2Name = player2NameField.value;
      if (player1Name !== "" && player2Name !== "") {
        document.getElementById("playersInput").style.display = "none";
        document.getElementById("wheelContainer").style.display = "block";
        this.startGame(player1Name, player2Name);
      } else {
        if (player1Name === "") {
          player1NameField.classList.add("is-invalid");
        }
        if (player2Name === "") {
          player2NameField.classList.add("is-invalid");
        }
      }
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

  startGame(player1Name, player2Name) {
    this.player1 = new Player(player1Name);
    this.player2 = new Player(player2Name);
    this.turnNumber = 0;
    this.turn = Math.floor(Math.random() + 1);
    this.getPlayerTurn();
    this.updateScoreDisplay();
    this.displayPlayerTurn();
  }

  getPlayerTurn() {
    if (this.turn === 1) {
      return this.player1;
    } else if (this.turn === 2) {
      return this.player2;
    }
  }

  incrementTurn() {
    this.turnNumber += 1;
  }

  updateScoreDisplay() {
    document.getElementById(
      "player1-name-score"
    ).innerHTML = `${this.player1.name}: ${this.player1.score}`;
    document.getElementById(
      "player2-name-score"
    ).innerHTML = `${this.player2.name}: ${this.player2.score}`;
  }

  displayPlayerTurn() {
    if (this.turn === 1) {
      document.getElementById("player-turn-name").innerHTML = this.player1.name;
    } else if (this.turn === 2) {
      document.getElementById("player-turn-name").innerHTML = this.player2.name;
    }
  }

  endPlayerTurn() {
    console.warn("endPlayerTurn", this.turn);
    if (this.turn === 1) {
      this.turn = 2;
    } else if (this.turn === 2) {
      this.turn = 1;
    }
    this.displayPlayerTurn();
  }

  onQuestionAnswered(isCorrect) {
    this.incrementTurn();
    const chosenPlayer = this.getPlayerTurn();
    if (isCorrect) {
      chosenPlayer.score += 5;
      this.updateScoreDisplay();
    }
    this.endPlayerTurn();
    this.question.remove();
    this.roulette.reinitialise();
    if (this.isGameFinished()) {
      noCanvas();
      const winner =
        this.player1.score > this.player2.score ? this.player1 : this.player2;
      document.getElementById("wheelContainer").style.display = "none";
      document.getElementById("winner-page").style.display = "block";
      document.getElementById("winner-name").innerHTML = winner.name;
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
    return this.turnNumber === 10;
  }
}
