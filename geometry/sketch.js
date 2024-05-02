function setup() {
  createCanvas(710, 400,WEBGL);
  
}

function draw() {
  background(110);
  
  stroke(255);
  fill(0);
  push();
  translate(-275,0);
  plane(50,50);
  pop();
  
   stroke(255);
  fill(50);
  push();

  translate(-275,100);
  box(100);
   
  pop();
  
   noFill();
   stroke(255);
  push();
 sphere(180);
  pop();
  
   stroke(255);
  fill(50);
  push();
  translate(275,100);
 cylinder(50,100);
  pop();
  
   stroke(255);
  fill(0);
  push();
  translate(275,-30);
  cone(50,100);
  pop();
  
   stroke(255);
  fill(50);
  push();
  translate(275,-150);
 ellipsoid(20,30,30);
  pop();
  
   stroke(255);
  fill(0);
  push();
  translate(-260,-110);
 torus(20,50);
  pop();
  
}