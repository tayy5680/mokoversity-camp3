
var gameModule = (function () {


	var timeoutVar,
		counter = 0,
		ballX,
		ballY,
		ballR,
		scores;

	var colors = ['#8b008b', '#00008b', '#f0f8ff'];
	var length = colors.length;


function touchEvent(evt){
	var x = evt.clientX,
		y = evt.clientY;


	console.log("Clicked: " + x + " , " + y);

	var tmp = (ballX - x) * (ballX - x) + (ballY - y) * (ballY - y);

	if (tmp < ballR*ballR) {

		scores = scores + (100 - ballR);
		console.log("Goodjob!")
	}
}



	function start() {
		scores = 0

		document.getElementById("main").addEventListener("click", touchEvent, false);
		startGame();
	}

	function startGame() {
		var canvas = document.getElementById('game');
		var ctx = canvas.getContext('2d');

		ballX = Math.floor(Math.random() * 600)//0..600
		ballY = Math.floor(Math.random() * 450)
		ballR = Math.floor(Math.random() * 80)

		canvas.width = 640;
		canvas.height = 480;

		ctx.fillStyle = colors[counter % length];
		ctx.beginPath();
		ctx.arc(ballX,ballY,ballR, 0, Math.PI * 2 , true);
		ctx.fill();

		if (counter >= 10000){
			gameOver();

		} else{
			timeoutVar = setTimeout(start,2000);
			counter = counter + 1;

			
		}
	}
	function gameOver() {
		console.log("Final:"+scores);
	}

	return{
		start:start
	}





}) ();
gameModule.start();