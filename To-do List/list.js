var inputArray = [];//create an user input array

var input = prompt("What would you like to do?");

while(input !== "quit")
{
	//if user types "new"
	if(input === "new")
	{
		//new input gets stored in back of array
		newInput = prompt("Enter a new todo");
		//store value into new array
		inputArray.push(newInput);
	}
	//if user types "list"
	else if(input === "list")
	{
	console.log(inputArray);
	}
//keep prompting user for input
var input = prompt("What would you like to do?");
}
	//when user has typed "quit"
	prompt("OK, you quit the app");
