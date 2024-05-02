function setup(){
  createCanvas(210,100);
  background(127);
}
function draw() {
  ellipse(20,50,33,33);
  
  push();
  strokeWeight(10);
  fill(204,153,0);
  ellipse(60,50,33,33);
  
  push();
  stroke(0,102,153);
  ellipse(105,50,33,33);
  
  pop();
  ellipse(150,50,33,33);
  pop();
  
  ellipse(190,50,33,33);
}
