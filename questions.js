const scienceQA = [
  { text: "Q1S", answer: "A1", choices: ["c11", "c12"] },

  { text: "Q2", answer: "A2", choices: ["c21", "c22"] },

  { text: "Q3", answer: "A3", choices: ["c31", "c32"] },

  { text: "Q4", answer: "A4", choices: ["c41", "c42"] }
];

const geoQA = [
  { text: "Q1g", answer: "A1", choices: ["c11g", "c12"] },

  { text: "Q2g", answer: "A2", choices: ["c21g", "c21"] },

  { text: "Q3g", answer: "A3", choices: ["c31g", "c32"] },

  { text: "Q4g", answer: "A4", choices: ["c41g", "c42"] }
];

const artQA = [
  { text: "Q1", answer: "A1", choices: ["c11", "c12"] },

  { text: "Q2", answer: "A2", choices: ["c2", "c21"] },

  { text: "Q3", answer: "A3", choices: ["c31", "c32"] },

  { text: "Q4", answer: "A4", choices: ["c41", "c42"] }
];

const historyQA = [
  { text: "Q1", answer: "A1", choices: ["c11", "c12"] },

  { text: "Q2", answer: "A2", choices: ["c2", "c21"] },

  { text: "Q3", answer: "A3", choices: ["c31", "c32"] },

  { text: "Q4", answer: "A4", choices: ["c41", "c42"] }
];

class Question {
  constructor(category) {
    this.category = category;
    this.chosenQuestion;
    this.rightAnswer;
    this.theChoices = [];
  }

  getQuestion() {
    if (this.category === "Sci") {
      let index = Math.floor(Math.random() * scienceQA.length);
      this.chosenQuestion = scienceQA[index].text;
      this.rightAnswer = scienceQA[index].answer;
      this.theChoices = scienceQA[index].choices;
      console.log(this.chosenQuestion);
    } else if (this.category === "Hist") {
      let index = Math.floor(Math.random() * historyQA.length);
      this.chosenQuestion = historyQA[index].text;
      this.rightAnswer = historyQA[index].answer;
      this.theChoices = historyQA[index].choices;
      console.log(this.chosenQuestion);
    } else if (this.category === "Geo") {
      let index = Math.floor(Math.random() * geoQA.length);
      this.chosenQuestion = geoQA[index].text;
      this.rightAnswer = geoQA[index].answer;
      this.theChoices = geoQA[index].choices;
    } else {
      let index = Math.floor(Math.random() * artQA.length);
      this.chosenQuestion = artQA[index].text;
      this.rightAnswer = artQA[index].answer;
      this.theChoices = artQA[index].choices;
    }
    this.showQuestion();
    this.showChoices();
  }

  showQuestion() {
    createDiv(this.chosenQuestion);
  }
  showChoices() {
    let firstChoice = createButton(this.theChoices[0]);
    let secondeChoice = createButton(this.theChoices[1]);
  }
}
