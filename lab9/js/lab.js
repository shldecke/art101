// index.js - Lab 9: JavaScript for the Web
// Author: Shelby Decker
// Date: 5/11/23

// variables
var outputEl = document.getElementById("outty");

// create a variable and add something to display
var new1El = document.createElement("p");
outputEl.appendChild(new1El);
new1El.innerHTML = "hi art101!!";
//document.writeln("fuck");

// create a second variable and change what it says
var new2El = document.createElement("p");
outputEl.appendChild(new2El);
new2El.innerHTML = "my name is Shelby :)";
//document.writeln("me");

// append the variables to the output
//outputEl.appendChild(new1El);
//outputEl.appendChild(new2El);


  