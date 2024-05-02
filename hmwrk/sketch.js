

let slider1;
let button1;
let checkbox1;
let radio1;
let select1;
let entry1;

function setup() {
  createCanvas(200, 200);
  background("beige");

  checkbox1 = createCheckbox("Check me");

  createP(); 
  createSpan("What's your name? "); 

  entry1 = createInput();
  
  entry1.changed(entryCallback);

  createP();

 
  slider1 = createSlider(10, 200);

  button1 = createButton("Press me"); 
  button1.mouseClicked(button1Clicked);

  createP();

  radio1 = createRadio();

  
  radio1.option(1, "cranberries");
  radio1.option(2, "almonds");
  radio1.option(3, "gouda");

  radio1.value("1"); 

  createP(); 

  select1 = createSelect();
 
  select1.option("Sans-serif");
  select1.option("Serif");
  select1.option("Fantasy");
  
  select1.changed(select1Changed);
}

function draw() {
  
  let gray = slider1.value();
  fill(gray);

  
  if ((mouseX < width / 3) &&
    (mouseY < height / 3)) {
    checkbox1.checked(true);
  }
  
  if (checkbox1.checked()) {
    text("CHECKED", 20, 40);
  }

  switch (radio1.value()) {
    
    case "1":
      rect(0, 0, width, 50);
      break;
    case "2":
      rect(0, 70, width, 50);
      break;
    case "3":
      rect(0, 140, width, 50);
      break;
  }
}


function button1Clicked() {
  
  slider1.value(200);
}



function select1Changed() {
  switch (select1.value()) {
    case "Sans-serif":
      textFont("sans-serif");
      break;
    case "Serif":
      textFont("serif");
      break;
    case "Fantasy":
      textFont("fantasy");
      break;
  }
}


function entryCallback() {
  for (let i = 0; i < 25; i++) {
    text(entry1.value(), random(width),
          random(height));
  }

}

function mouseClicked() {
  console.log("button1?", button1.value());
  console.log("checkbox1?", checkbox1.value());
 
  checkbox1.value("Check again");
  button1.value("clicked?");
}

function keyTyped() {
  switch (key) {
    case "r":
     
      slider1.value(100);
      break;
  }
}