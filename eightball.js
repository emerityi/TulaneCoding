let eightball;
let showImage = true;

function preload(){
  eightball =loadImage('Magic_eight_ball.png')
}

function setup(){
  createCanvas (windowWidth, windowHeight)
  eightball
}

function draw(){
  background(100)
  if (showImage){
  image(eightball,550,200,400,400)
  }
}

function keyPressed(){
  if (keyCode===ENTER){
    showImage = false;
  }
}
