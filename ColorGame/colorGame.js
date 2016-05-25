var numSquares = 6;
var colors = generateRandomColors(numSquares); //6 being the number of squares
var squares = document.querySelectorAll(".square"); //take all div square class and store it in var squares
var pickedColor = pickColor(); //calls the function pickedColor()
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var buttonReset = document.querySelector("#reset");
var buttonHard = document.querySelector("#hardBtn");
var buttonEasy = document.querySelector("#easyBtn");

buttonEasy.addEventListener("click",function(){
	//show class "selected" is clicked
	buttonEasy.classList.add("selected");
	buttonHard.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares); //generate 3 random colors
	pickedColor = pickColor(); //choose a new picked Color
	colorDisplay.textContent = pickedColor; //change text content to the new picked color
	//hide the bottom 3 squars
	h1.style.background = "steelblue";

	for(var i = 0; i < squares.length; i++){
		if(colors[i]){ //if you are at an index in the colors array
		squares[i].style.background = colors[i]; //give each square a new color for however many colors[i] there are. Which is set to 3
		}
		else //the remaining 3, hide them
		squares[i].style.display = "none";
	}
	background: steelblue;
})
buttonHard.addEventListener("click",function(){
	buttonEasy.classList.remove("selected");
	buttonHard.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares); //generate 3 random colors
	pickedColor = pickColor(); //choose a new picked Color
	colorDisplay.textContent = pickedColor; //change text content to the new picked color
	//hide the bottom 3 squares
	h1.style.background = "steelblue";

	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i]; //give each square a new color for however many colors[i] there are. Which is set to 3
		squares[i].style.display = "block";
	}
	background: steelblue;
})

//USER CLICKS NEW COLORS(RESET)
buttonReset.addEventListener("click", function(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//change colors of squares on the page to match text content of picked color
	this.textContent = "New Color";
	//^ could say buttonReset.textcontent,but since we are in the inside the event listener for reset button we can use "this"
	messageDisplay.textContent = "";
	h1.style.background = "steelblue";

	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
	}
	background: steelblue;
	buttonReset.textContent = "New Colors";
	
})

colorDisplay.textContent = pickedColor; //have span id = colorDisplay show the picked color

for(var i = 0; i < squares.length; i++){
	//add initial colors to squares
	squares[i].style.background = colors[i]; 

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.background;  //this grabs current square with background "rgb(255, 0, 255)"
		//compare color to picked color
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColor(clickedColor); //changes all squares to picked color
			h1.style.background = pickedColor;
			buttonReset.textContent = "Play Again?";
		}
		else{
			//if incorrect, set square to blend in with background
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}
function changeColor(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = color;
	}
}
function pickColor(){
	//pick a random number & multiply by length of the array because the array will either be 6 or 3
	var random = Math.floor(Math.random() * colors.length);//multiply by length of the colors array.  Math.floor removes decimals
	//  ^^ picks a random number 1-6. 
	return colors[random]; //returns color at 1,2,3,4,5,6(random)
}
function generateRandomColors(num){
	//make an array
	var arr = [];
	//add num random colors to array
	for(var i = 0; i < num; i++){
		arr.push(randomColor()); //add a new random color to the array
	}
	//return that array
	return arr;
}
function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}