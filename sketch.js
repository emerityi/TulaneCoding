let furby

function preload(){
  furby = loadImage('furby.png')
}

function setup() {
  createCanvas(600,600)
}

function draw() {
  background(220);
  
  fill(114, 118, 247)
  rect(0,430,700,400)
  stroke(204, 186, 153)
  
  stroke(178,221,237)
  fill(204, 186, 153)
  circle(300,360,295)
  
  stroke(178,221,237)
  fill(178, 221, 237)
  rect(0,0,700,430)
  
  fill(243, 255, 79)
  circle(580,30,200)
  
  stroke( 251, 252, 250)

  fill(251, 252, 250)
  circle(100,30,70)
  
   fill(251, 252, 250)
  circle(70,60,70)
  
   fill(251, 252, 250)
  circle(128,60,70)
  
circle(270,100,70)
  
  circle(300,70,70)
  
  circle(330,100,70)
  
  stroke(145, 237, 52)
  fill(145, 237, 52)
  triangle(450,200,450,100,540,150)
  image(furby, 200, 200)

}