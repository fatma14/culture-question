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
    const rotationAngle = this.rotatedAngle % 360;
    rotateZ(this.rotatedAngle + rotationSpeed);
    this.rotatedAngle += rotationSpeed;
    console.log(this.rotatedAngle);
    if (rotationAngle > 0 && rotationAngle < 90) {
      console.log("art");
    } else if (rotationAngle > 90 && rotationAngle < 180) {
      console.log("geo");
    } else if (rotationAngle > 180 && rotationAngle < 270) {
      console.log("sci");
    } else {
      console.log("his");
    }
    angleMode(RADIANS);
    this.draw();
  }

  // getTheChosenCategory() {
  //   const rotationAngle = this.rotatedAngle % 360;
  //   if (rotationAngle > 0 && rotationAngle < 90) {
  //     console.log("science");
  //   } //else if ()
  //   //   sci [0-90]
  //   //   his [90-180]
  //   //   art [180-270]
  //   //   geo[270-360]
  //   // }
  // }
}
