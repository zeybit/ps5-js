let checkbox1;
let checkbox2;
let checkbox3;
let radio1;
let mySelect;
let slider1;
let myPicker;
let button1;
let p2;
let flag=true;
let myInput;

function setup() {
  createCanvas(400, 400);
  background(255);
  let h1 = createElement('h1', 'p5*js');
   h1.style('color', 'deeppink');
   h1.position(10, 10);
  
   let div1 = createDiv('div');
   div1.position(20, 5);
   div1.size(50,20);
   div1.style('border', '2px solid red');
  
  let div2 = createDiv();
  div2.position(25, 80);
  let s1 = createSpan('p5');
  let s2 = createSpan('*');
  s2.style('color', 'deeppink');
  let s3 = createSpan('js');
  s1.parent(div2);
  s2.parent(div2);
  s3.parent(div2);
  
  let p1 = createP('Tell me a story.');
  p1.position(5, 90);
  p1.style('font-family', 'Tohama');
  p1.style('font-size', '20pt');
  p1.style('color', 'blue');
  
  let a1 = createA('http://p5js.org/', 'Click here', '_blank');
  a1.position(25, 160);
  
   checkbox1= createCheckbox('checkbox1');
  checkbox1.position(0, 180);
   checkbox2= createCheckbox('checkbox2', true);
  checkbox2.position(0, 200);
  checkbox3= createCheckbox('checkbox3');
  checkbox3.position(0, 220);
  
  radio1=createRadio();
  radio1.position(0, 250);
  radio1.size(150);
  radio1.option('Male');
  radio1.option('Female');
  radio1.selected('Male');
  
  mySelect = createSelect();
  mySelect.position(0, 280);
  mySelect.option('Istanbul', 'one');
  mySelect.option('Ankara', 'two');
  mySelect.option('İzmir', 'three');
  mySelect.option('Bursa', 'four');
  mySelect.selected('Istanbul');
  
  slider1 = createSlider(0, 255, 0, 0);
  slider1.position(10, 310);
  slider1.size(100);
  
  myPicker = createColorPicker('deeppink');
  myPicker.position(0, 330);
  
  button1 = createButton('Click me');
  button1.position(0, 360);
  button1.mousePressed(printValue);
  p2 = createP('Tell me a story.');
  p2.position(80, 360);
  
  myInput = createInput();
  myInput.position(200, 10);
  myInput.size(100);
  
  let img = createImg(
    'https://p5js.org/assets/img/asterisk-01.png',
    'The p5.js magenta asterisk.');
  img.position(200, 40);
  img.size(50,50);
  
   let inputFile = createFileInput(displayInfo);
  inputFile.position(200, 120);
}

function draw() {
 // background(220);
  
  if(checkbox1.checked()){
   checkbox3.checked(true); 
  }
  else{
    checkbox3.checked(false);
  }
    
  /* print(radio1.selected()); 
  
  let c = mySelect.selected();
  print(c); 
  
  print(slider1.value());*/
  
 /* print(myPicker.value());*/
  
 // print(myInput.value());//
}

function printValue(){
  if(flag){
    p2.hide();
    flag=false;
  }
  else{
    p2.show();
    flag=true;
  }
}

function displayInfo(file) {
  background(220);

  // Display the p5.File's name.
  text(file.name, 200, 160, 80, 40);

  // Display the p5.File's type and subtype.
  text(`${file.type}/${file.subtype}`, 200, 200);

  // Display the p5.File's size in bytes.
  text(file.size, 200, 220);
}