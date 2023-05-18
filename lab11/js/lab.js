// index.js - Lab 11: Libraries & jQuery
// Author: Shelby Decker
// Date: 5/18/23

// use jQuery to create buttons to add the challenge, problems & results section of your document 

// create buttons & add them to the sections
$("#challenge").append("<button>Challenge Button!!</button>");
$("#problems").append("<button>Problems Button!!</button>");
$("#results").append("<button>Results Button!!</button>");

// add a click event to each button
$("#challenge button").click(function() {
    alert("AHH you hit the challenges button oh no!!");
});
$("#problems button").click(function() {
    alert("Houston, we have some problems!");
});
$("#results button").click(function() {
    alert("hey, welcome to results (;");
});