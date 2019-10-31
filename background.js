// class Background {
//   constructor() {
//     this.artY = -400;
//     this.histX = 0;
//     this.geoY = 0;
//     this.sciX = 0;
//   }

//   preload() {
//     this.art = loadImage("asset/art-text.jpg");
//     this.hist = loadImage("asset/HISTORY.jpg");
//     this.geo = loadImage("asset/geography.jpg");
//     this.sci = loadImage("asset/science.png");
//   }

//   draw() {
//     clear();
//     this.artY += 3;
//     image(this.art, -100, this.artY, 100, 100);
//     image(this.art, -100, this.artY + height, height);

//     this.artY = this.artY % height;
//     if (this.artY <= -height) {
//       this.artY = -200;
//     }

//     //     this.xClouds -= 2;

//     //     image(this.bgClouds, this.xClouds, 0, width); // width comes from p5
//     //     image(this.bgClouds, this.xClouds + width, 0, width);

//     //     if (this.xClouds <= -width) {
//     //       this.xClouds = 0;
//     //     }

//     //     this.xForest -= 4;
//     //     image(this.bgForest, this.xForest, 230, width);
//     //     image(this.bgForest, this.xForest + width, 230, width);

//     //     if (this.xForest <= -width) {
//     //       this.xForest = 0;
//     //     }
//     //   }
//   }
// }
