 let a=5;

function setup() {
  createCanvas(504, 400);
  print('hello world');
  print(a);

 print(displayWidth);
 print(displayHeight);
print(windowWidth);
print(windowHeight);
  print(width);
  print(height);
  
}

function draw() {
 
  describe('Hello',LABEL);
 cursor(ARROW);
 // noCursor();
  if (focused===true){
    background(0,255,0);

  }
  else{
    background('blue');
  }
  
}
function windowsResized(){
  resizeCanvas(width-400,height-400);
  
}