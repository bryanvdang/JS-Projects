//-----------------------------------------------------------
console.log("print out all numbers between -10 and 20");

var count = -10;

while (count <= 20){
	console.log("The number is " + count)
	count++;
}

console.log("print out all even numbers between 10 and 40");
//-----------------------------------------------------------
count = 10;

while(count <= 40){
	console.log("The number is " + count)
	count+=2;
}

// while(count <= 40){
// 	if(count%2 === 0){
// 		console.log("The number is " + count)
// 	}
// 	count++;
// }
//^^ ideal incase counter started at 11. 
//-----------------------------------------------------------
console.log("print out all odd numbers between 300 and 330")

count = 300;

while(count <= 333){
	if(count%2 !== 0) //if number at count is divided by 2, is not equal to 0, therefore it's odd
	console.log("The number is " + count)
	count++;
}
//-----------------------------------------------------------
console.log("print out all numbers divisible by 5 and 3 between 5 and 50");

count = 5
//DRY CODE (don't repeat yourself)
while(count <= 50){
	if(count%5 == 0 && count%3 === 0) //if count is divided by 5 and has no remainder, then print
		console.log("number is " + count)
		count++;
}

