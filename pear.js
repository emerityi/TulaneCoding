let gary
function preload(){
	gary = loadImage('gary.png')
}

function setup(){
	createCanvas(windowWidth,windowHeight);
}

function draw(){
	background(220,15,98);

	if(mouseX>300){
		background(220,15,98);
	} else{
		background(135,64,98)
	}

	image(gary,200,50)
	noTint();
	image(gary,mouseX/2, mouseY, 00,00)

}