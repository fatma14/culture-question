const categories = ["Sci", "History", "Art", "Geo"];
const colors = ["#edca5a", "#efd06c", "#f2da8c", "#f6e5ac"];

class Roulette {
  constructor() {
    this.rotatedAngle = 0;
    this.rotationSpeed = 30;
  }

  draw() {
    categories.forEach((category, index) => {
      fill(colors[index]);
      noStroke();
      arc(0, 0, 400, 400, radians(index * 90), radians(index * 90 + 90));
      fill("#000000");
      text(
        category,
        Math.sign(sin(radians(index * 90 + 45))) * 100,
        Math.sign(cos(radians(index * 90 + 45))) * 100
      );
    });
  }

  spin() {
    const angle = millis() / 1000;
    angleMode(DEGREES);
    //console.log(this.rotatedAngle + this.rotationSpeed);
    // rotateZ(this.rotatedAngle + this.rotationSpeed);
    rotateZ(this.rotatedAngle + angle);
    // this.rotatedAngle += this.rotationSpeed;
    this.rotatedAngle += angle;
    console.log(this.rotatedAngle);
    angleMode(RADIANS);
    this.draw();
  }
}
