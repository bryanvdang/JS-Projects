var fName = prompt("Hello, What is your name?");
var lName = prompt("What is your last name?");
var age = prompt("what is your age?");

var daysAlive = age * 365.25; //to include leap years 

console.log("Your full name is " + fName + " " + lName);
console.log("Your age is " + age);
alert("You have been alive for roughly " + daysAlive + " days");