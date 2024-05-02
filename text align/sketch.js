function setup() {
  createCanvas(800,400);
  textAlign(CENTER,CENTER);
}

function draw() {
  background(160);
  
  textSize(20);
  textAlign(RIGHT);
  textStyle(NORMAL);
  drawWords(width*0.25);
  
  textSize(30);
  textAlign(CENTER);
  textStyle(ITALIC);
  drawWords(width*0.5);
  
  textSize(42);
  textAlign(LEFT);
  textStyle(BOLD);
  textLeading(50);
  drawWords(width*0.75);
  
}
function drawWords(x){
  fill(0);
  text("ichi",x,80);
  
  fill(65);
  text("ni",x,150);
  
  fill(190);
  text("san",x,220);
  
  fill(225);
  text("shi",x,290);
}