var inputArray = [];//create an user input array

var input = prompt("What would you like to do?");

while(input !== "quit")
{
	if(input === "new")	//if user types "new"
	{
		newTodo();
	}
	else if(input === "delete")
	{
		deleteTodo();
	}
	//if user types "list"
	else if(input === "list")
	{
		list();
	}
//keep prompting user for input
var input = prompt("What would you like to do?");
}
	//when user has typed "quit"
	prompt("OK, you quit the app");

function newTodo(){
	//new input gets stored in back of array
	newInput = prompt("Enter a new todo");
	//store value into new array
	inputArray.push(newInput);
	console.log("Added To-do");
}
function deleteTodo(){
	//ask for index of which To-do to delete
	deleteInput = prompt("Enter index of which To-Do to delete?")
		
	inputArray.splice(deleteInput,1);
	//name of array, where i'm going to cut, how far do i want to cut, just 1 index
	console.log("Deleted To-do");
}
function list(){
	inputArray.forEach(function(todo, i){ //todo holds each value for every item in that array and will be printed
		// 'i' referrs to every index ^ that is passed in
			console.log(i + ": " + todo);
		});
}