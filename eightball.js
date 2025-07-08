let randomTexts = [""]
let myInput;
let eightball;
let showImage = true;

function preload(){
  eightball =loadImage('Magic_eight_ball.png')
}

function setup(){
  createCanvas (windowWidth, windowHeight)
  myInput =createInput('Enter text here');
    myInput.position(580, 50);
  myInput.size(400);
  eightball
}

function draw(){
  background(100)
   let inputText = myInput.value();
  //text(inputText, 50, 100);
  if (showImage){
  image(eightball,550,200,400,400)
  }
}

function keyPressed(){
  if (keyCode===ENTER){
    showImage = false;
  }
}
