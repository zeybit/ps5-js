let img;

// Load an image and create a p5.Image object.
function preload() {
  img = loadImage('assets/izu.jpg');
}

function setup() {
  createCanvas(300, 300, WEBGL);
}

function draw() {
  background(0);

  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);

  texture(img);

  box(150);
}