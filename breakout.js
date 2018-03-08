var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = -2;
var dy = -2;

//Define paddle
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;

function drawBall()
{
ctx.beginPath();
ctx.arc(x,y,ballRadius,0,2*Math.PI);
ctx.fill();
ctx.fillStyle = "blue";
ctx.closePath();
}

function drawPaddle()
{
	ctx.beginPath();
	ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
	ctx.fill();
	ctx.fillStyle = "black";
	ctx.closePath();
}

function draw() {
	ctx.clearRect(0,0,canvas.width,canvas.height);
	//Draw the ball
	drawBall();
	//Draw the paddle
	drawPaddle();


	
	x += dx;
	y += dy;
	
	if(rightPressed) {
		paddleX += 7;
	}
	else if(leftPressed) {
		paddleX -= 7;
	}
	
	//Bounce the ball off
	if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
		dx = -dx;
	}
	if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
		dy = -dy;
	}
}	

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
	if(e.keyCode == 39) {
		rightPressed = true;
	}
else if(e.keyCode == 37) {
	leftPressed = true;
}
	}

function keyUpHandler(e) {
	if(e.keyCode == 39) {
		rightPressed = false;
	}
	else if(e.keyCode == 37) {
		leftPressed = false;
	}
}

setInterval(draw,10);


