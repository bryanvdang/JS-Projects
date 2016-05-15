var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput =  document.querySelector("input");
var playTo = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false; //second stage of the game
var winningScore = 5;

p1Button.addEventListener("click", function(){
	if(!gameOver)
	{
		p1Score++;
		if(p1Score === winningScore)
		{
			p1Display.classList.add("winner"); //calls the class from css file and changes text to green
			gameOver = true; //prevents the user from adding after game is over cuz the rest of the code doesn't run
		}
		p1Display.textContent = p1Score;
	}
});
p2Button.addEventListener("click", function(){
	if(!gameOver)
	{
		p2Score++;
		if(p2Score === winningScore)
		{
			p2Display.classList.add("winner");
			gameOver = true;
		}
	p2Display.textContent = p2Score;
	}
});
resetButton.addEventListener("click", function(){
	//WHEN USER CLICKS RESET
	reset();
});
function reset()
{
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	p1Display.classList.remove("winner"); //removes css class association
	p2Display.classList.remove("winner");
	gameOver = false; //enable us to keep playing
}
numInput.addEventListener("change", function(){ //change is if any value changes
	playTo.textContent = this.value; //"this" refers to whatever the event was listening on (numInput)
	winningScore = Number(this.value);//"this" instead of "numInput"
	reset();
});