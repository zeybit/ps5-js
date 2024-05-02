function setup(){
  createCanvas(720,400);
  background(0);
  noStroke();

}
function draw(){
  fill(204);
  triangle(18,18,18,360,81,360);
  
  fill(255,0,0);
  square(500,60,80);
  
  fill(102);
  rect(81,81,80,63);
  
  fill(204);
  quad(189,18,216,18,216,360,144,360);
  
  fill(0,0,255);
  ellipse(252,144,72,100);
  
  
  
  fill(0,255,0);
  circle(650,200,100);
  
  fill(204);
  triangle(288,18,351,360,288,360);
  
  fill(255);
  arc(479,300,280,280,PI,TWO_PI);
}