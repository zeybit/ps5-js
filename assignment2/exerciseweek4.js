function setup() {
  createCanvas(400, 400);
  background("gray");
}

 function draw() {

   
 for(var y = 20; y < height; y=y+40){
for(var x = 20; x < width; x=x+40){
  fill("yellow");
  stroke("blue");
  
	ellipse(x, y, 40, 40);

	}

}
 }