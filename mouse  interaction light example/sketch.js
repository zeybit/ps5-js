function setup() {
  createCanvas(700, 400,WEBGL);
  noStroke();
  
}

function draw() {
  background(0);
  ambientLight(0,255/4,0);
  directionalLight(0,0,255,-1,0,0);

  let lightX=mouseX-width/2;
  let lightY=mouseY-height/2;
  spotLight(255,0,0,lightX,lightY,500,0,0,-1);
  rotateX(-PI/4);
  rotateY(PI/4);
  box(100);
  
}