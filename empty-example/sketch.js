function setup() {
  createCanvas(windowWidth, 400);
   background("#000000");
  // put setup code here
}

function draw() {

  fill(255, 255, 255);                         // red rectangle
   noStroke();


   strokeWeight(5);
   line(150, 200, 200, 200);
   strokeWeight(0);               //text: no stroke
   textSize(20);
   textFont("Arial");
   textStyle(ITALIC);
   textAlign(LEFT);
   text("life's a journey of million shades of grey, \n a mixture of Black and White", 100, 60);
   fill(128, 128, 128,100);           // red fill with transparency
   ellipse(mouseX, mouseY, 50, 50);      //red circle for mouse
  // put drawing code here
}
