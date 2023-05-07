// index.js - Lab 8: Anon Functions & Callbacks
// Author: Shelby Decker
// Date: 5/6/23

// Constants
var numbers = [2, 69, 233, 13, 122, 45];

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function square(x) {
    return x * x;
  }

// use map on our numbers array using square as a callback to operate on all values of the array
var squareResult = numbers.map(square);
console.log("Our array is: ", numbers);
console.log("Our array squared is: ", squareResult);

// use an anonymous function as a call back with map to do a different operation on numbers array
var additionResult = numbers.map(function(x) {return x + x;});
console.log("Our array added with itself is: ", additionResult);


  