const categories = ["Sci", "Hist", "Art", "Geo"];
const colors = ["#edca5a", "#efd06c", "#f2da8c", "#f6e5ac"];

class Roulette {
  constructor() {
    this.rotatedAngle = 0;
  }

  draw() {
    categories.forEach((category, index) => {
      fill(colors[index]);
      noStroke();
      arc(0, 0, 400, 400, radians(index * 90), radians(index * 90 + 90));
      fill("#000000");
      text(
        category,
        Math.sign(cos(radians(index * 90 + 45))) * 100,
        Math.sign(sin(radians(index * 90 + 45))) * 100
      );
    });
  }

  spin() {
    angleMode(DEGREES);
    const rotationSpeed = 10;
    this.rotatedAngle += rotationSpeed;
    rotateZ(this.rotatedAngle);
    console.warn("spin", this.rotatedAngle);
    angleMode(RADIANS);
    this.draw();
  }

  getTheChosenCategory() {
    const rotationAngle = this.rotatedAngle % 360;
    if (rotationAngle > 0 && rotationAngle <= 90) {
      return "art";
    } else if (rotationAngle > 90 && rotationAngle <= 180) {
      return "his";
    } else if (rotationAngle > 180 && rotationAngle < 270) {
      return "sci";
    } else {
      return "geo";
    }
  }

  reinitialise() {
    console.warn("reinitialise", this.rotatedAngle);
    angleMode(DEGREES);
    rotateZ(-this.rotatedAngle);
    //this.rotatedAngle = 0;
    angleMode(RADIANS);
    this.draw();
  }
}
