var number = 7;
console.log("Hello");
var input = Number(prompt("Guess a Number")); //user input from prompt gets stored into "input"

if (input === number){   //converts the "input" to a Number
	alert("Good Job! That's Correct");
}
else if(input < number){
	alert("The number is bigger");
}
else if(input > number){
	alert("The number is smaller");
}
else{
	alert("invalid Input");
}
