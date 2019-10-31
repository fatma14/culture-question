const scienceQA = [
  { text: "Q1S", answer: "c11", choices: ["c11", "c12"] },

  { text: "Q2", answer: "c21", choices: ["c21", "c22"] },

  { text: "Q3", answer: "c31", choices: ["c31", "c32"] },

  { text: "Q4", answer: "c41", choices: ["c41", "c42"] }
];

const geoQA = [
  { text: "Q1g", answer: "c11", choices: ["c11", "c12"] },

  { text: "Q2g", answer: "c21", choices: ["c21", "c21"] },

  { text: "Q3g", answer: "c31", choices: ["c31", "c32"] },

  { text: "Q4g", answer: "c41", choices: ["c41", "c42"] }
];

const artQA = [
  { text: "Q1", answer: "c11", choices: ["c11", "c12"] },

  { text: "Q2", answer: "c21", choices: ["c2", "c21"] },

  { text: "Q3", answer: "c31", choices: ["c31", "c32"] },

  { text: "Q4", answer: "c41", choices: ["c41", "c42"] }
];

const historyQA = [
  { text: "Q1", answer: "c11", choices: ["c11", "c12"] },

  { text: "Q2", answer: "c21", choices: ["c2", "c21"] },

  { text: "Q3", answer: "c31", choices: ["c31", "c32"] },

  { text: "Q4", answer: "c41", choices: ["c41", "c42"] }
];

class Question {
  constructor(category, onQuestionAnswered) {
    this.onQuestionAnswered = onQuestionAnswered;
    this.category = category;
    this.chosenQuestion;
    this.questionDiv;
  }

  getQuestion() {
    if (this.category === "Sci") {
      let index = Math.floor(Math.random() * scienceQA.length);
      this.chosenQuestion = scienceQA[index];
    } else if (this.category === "Hist") {
      let index = Math.floor(Math.random() * historyQA.length);
      this.chosenQuestion = historyQA[index];
    } else if (this.category === "Geo") {
      let index = Math.floor(Math.random() * geoQA.length);
      this.chosenQuestion = geoQA[index];
    } else {
      let index = Math.floor(Math.random() * artQA.length);
      this.chosenQuestion = artQA[index];
    }
  }

  draw() {
    this.questionDiv = createDiv().class("question container");
    const questionText = createDiv(this.chosenQuestion.text).class(
      "questionText"
    );
    this.questionDiv.child(questionText);
    this.chosenQuestion.choices.forEach(choice => {
      const defaultClasses = "btn btn-lg";
      const button = createButton(choice).class(
        `${defaultClasses} btn-warning`
      );
      button.mouseClicked(() => {
        button.class(
          choice === this.chosenQuestion.answer
            ? `${defaultClasses} btn-success`
            : `${defaultClasses} btn-danger`
        );
        setTimeout(() => {
          this.onQuestionAnswered(choice === this.chosenQuestion.answer);
        }, 1000);
      });
      this.questionDiv.child(button);
      this.questionDiv.parent("canvas-container");
    });
  }

  remove() {
    this.questionDiv.remove();
  }
}
