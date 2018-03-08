var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height-20;
var dx = -2;
var dy = -2;

//Define paddle
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth)/2;


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
	
	drawPaddle();

	
	x += dx;
	y += dy;
	
	//Bounce the ball off
	if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
		dx = -dx;
	}
	if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
		dy = -dy;
	}

}	

setInterval(draw,10);


