// index.js - Lab 7: Functions
// Author: Shelby Decker
// Due Date: 5/4/23 7:00a

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction() {
  // some code here
  // take input from user
  var userName = window.prompt("Hello. What is your name?", "null");
  // split the name given so it's in array form
  var splitUser = userName.split("");
  // sort the split array
  splitUser.sort();
  // return the joined, sorted, results
  return splitUser.join("");
}

// calling the function
var userInput = myFunction();
document.writeln("Your sorted name: ", "</br>", userInput);
/*
function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
*/
