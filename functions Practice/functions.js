//function that checks if the input is even or odd
function isEven(x){
	if(x % 2 === 0){
		return true;
	}
	else
		return false;
}
//function isEven(num){
//	return num % 2 === 0;   <--boolean statement
//}
// ^^^ all you really need



//function that returns factorial of a number
function factorial(y){
	if(y <= 1){
		return 1;
	}
	return(y * factorial(y-1)); //recursive
}
//function that replaces "-" with "_"
function replace(str){
	
	var result = str.replace("-", "_");
	return result;
}