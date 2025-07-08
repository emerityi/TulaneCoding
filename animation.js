	let xPos
	let yPos

	let xSpeed=2
	let ySpeed=2

	function preload(){

	}

	function setup(){
	createCanvas(windowWidth, windowHeight)

	background(0)

	xPos = windowWidth/2
	yPos = windowHeight/2
	}

	function draw(){
		fill(255)
		text('Bouncing Ball!', 100, 100)
	  ellipse(xPos, yPos, 100, 100);
	xPos = xPos + xSpeed;
	yPos = yPos + ySpeed;

	if(xPos >= windowWidth || xPos <= 0){
	//reverse x speed
	xSpeed = xSpeed * -1;
	}
	if(yPos >= windowHeight || yPos <= 0){
	//reverse y speed
	ySpeed = ySpeed * -1;
	}
	}

	function windowResize(){

	}

	function windowCanvas(){
		resizeCanvas(windowWidth,windowHeight)


	}


