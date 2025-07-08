let furby
let gary
function preload(){
  furby = loadImage('furby.png')

  gary = loadImage('gary.gif')
}


function setup() {
  createCanvas(600,600)
}

function draw() {
  background(220);

  stroke(204, 186, 153)
  if(mouseIsPressed == true){
    fill(35, 55, 61)
  } else{

  fill(114, 118, 247)
}
  rect(0,430,700,400)
  
  stroke(178,221,237)
  fill(204, 186, 153)
  circle(300,360,295)
  
  stroke(178,221,237)
  if(mouseIsPressed == true){
    fill(12,22,97)
  }else{

  fill(178, 221, 237)
  }
  rect(0,0,700,430)
  
  if(mouseIsPressed == true){
    fill(150)
  }else{
  fill(243, 255, 79)
  }
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
  triangle(350,300,350,200,440,245)

  stroke(0,0,0)
  strokeWeight(2)
  line(350,430,350,200)
  //image(furby, 200, 200)
  image(gary, 100,60, 100, 100)
}