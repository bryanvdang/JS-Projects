var number = 7;
console.log("Hello");
var inputString = (prompt("Guess a Number")); //user input from prompt gets stored into "input"
var guess =  Number(inputString);
//converts the "input" to a Number

//if user guesses correct number
if (guess === number){   
	alert("Good Job! That's Correct");
}
//if input is too low
else if(guess < number){
	alert("The number is bigger");
}
//if the input is too high
else if(guess > number){
	alert("The number is smaller");
}
//if not given a proper input
else{
	alert("invalid Input");
}


// while(inputString != 7){
// 	do{
// 		guess = prompt("Guess again");
// 		//if input is too low
// 		if(guess < number){
// 			alert("The number is bigger");
// 		}
// 		//if the input is too high
// 		else if(guess > number){
// 			alert("The number is smaller");
// 		}
// 		//if not given a proper input
// 		else{
// 			alert("invalid Input");
// 		}
// 	}
//}