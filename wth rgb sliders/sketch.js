let s1,s2,s3,p1,p2,p3; 

function setup() {
  createCanvas(400, 400);
  s1=createSlider(0, 255, 100);
  s1.size(150);
  s1.position(10,20);

  
  
  s2=createSlider(0, 255, 100);
  s2.size(150);
  s2.position(10,50);


   s3=createSlider(0, 255, 100);
  s3.size(150);
  s3.position(10,80);
  
}

function draw() {
  
  let a =s1.value();
  let b = s2.value();
  let c= s3.value();
  background(a, b, c);
  text('red', s1.x * 2 + s1.width, 35);
  text('green', s2.x * 2 + s2.width, 65);
  text('blue', s3.x * 2 +s3.width, 95);

  
 
}
