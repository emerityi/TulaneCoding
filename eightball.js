function preload(){
  eightball =loadImage('Magic_eight_ball.png')
}

function setup(){
  createCanvas (windowWidth, windowHeight)
}

function draw(){
  background(100)
  image(eightball,550,200,400,400)
}
