let randomTexts = ["Wishful Thinking!","Keep Hoping!","Not In A Million Years!","Without A Doubt","Can You Handle The Truth?","Definitely Maybe","Try Google","Eight Ball.exe Has Stopped Working","Bop it, Twist It, Pull It", "Of Course Queen!","HELP! I'M STUCK IN AN EIGHT BALL"]
let currentText = " "
let myInput;
let eightball;
let imageAlpha =255;
let isFading =false;
let showImage = true;
let refreshButton

let eightballBool = true
let scene2Bool = false

function preload(){
  eightball =loadImage('Magic_eight_ball.png')
}

function setup(){
  createCanvas (windowWidth, windowHeight)
  textSize(30)
  textAlign(CENTER);
  myInput =createInput('Enter text here');
    myInput.position(580, 50);
  myInput.size(400);
  myInput.changed(answer)
  refreshButton = createButton('Refresh')
refreshButton.position(windowWidth/2, windowHeight/2 + 200)
refreshButton.mousePressed(refreshApp)
refreshButton.hide()


}

function refreshApp(){
  // eightballBool = false
  // scene2Bool = true
  background(200, 50, 200)


  imageAlpha =255;
  myInput.value('')
  currentText = " "
    isFading =false;

  refreshButton.hide()

}
 

function answer(){
  if(myInput.value() != ''){
   isFading =true;
   currentText = random(randomTexts);
 }
 refreshButton.show()
}

function draw(){
  if(eightballBool == true){
    eightballScene()
  }
  
  if(scene2Bool == true){
    refreshApp()
  }
}

function eightballScene(){
   background(150)
  tint(255,imageAlpha);
  textSize(24);
  text(currentText, width/2, height/2);
   let inputText = myInput.value();
  //cantext(inputText, 50, 100);
  if (showImage){
  image(eightball,550,200,400,400)
  if(isFading && imageAlpha>0){
    imageAlpha--;
  }
  }
}

function keyPressed(){
  if (keyCode===ENTER){
  
  }
  {
    if(keyCode===ENTER){
     // currentText = random(randomTexts);
    }
  }
}
