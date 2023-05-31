// index.js - Lab 13: Loops
// Author: Shelby Decker
// Date: 5/25/23
function fizzBuzzBoom () {
    var audi = "";
    // iterate over all of out numbers
    for (var num=1; num<=200; num++) {
        // multiples of 3, 5 & 7 output FizzBuzzBoom
        if (num % 105 == 0){
            audi += "FizzBuzzBoom ";
        }// multiples of 5 & 7 output BuzzBoom
        else if (num % 35 == 0){
            audi += "BuzzBoom ";
        }// multiples of 3 & 7 output FizzBoom
        else if (num % 21 == 0){
            audi += "FizzBoom ";
        }// mulitples of 3 & 5 output FizzBuzz
        else if (num % 15 == 0){
            audi += "FizzBuzz ";
        }// multiples of 7 output Boom
        else if (num % 7 == 0){
            audi += "Boom ";
        }// multiples of 5 output Buzz
        else if (num % 5 == 0){
            audi += "Buzz ";
        }// multiples of 3 output Fizz
        else if (num % 3 == 0){
            audi += "Fizz ";
        } else {
            audi += num + " ";
        }
        
    }
    return audi;
}
// grab the element associate with where we want to store our output
var results = document.getElementById("output");
// create a new paragraph element and store it in outty
var outty = document.createElement("p");
// change the innerhtml of outty
outty.innerHTML = fizzBuzzBoom();
// append the new paragraph element to the webpage
results.appendChild(outty);
/*
// Create a "FizzBuzz" function that loops through 1-200 listing them along the way
function fizzBuzz(){
    // start with a blank string to append to
    var outty = "";
    for (var i = 1; i <= 200; i++){
        // multiple of 3 & 5 & 7
        if (i % 105 == 0){
            outty += "FizzBuzzBoom ";
        // multiple of 5 & 7
        } else if (i % 35 == 0){
            outty += "BuzzBoom ";
        // multiple of 3 & 7
        } else if (i % 21 == 0){
            outty += "FizzBoom ";
        // multiple of 3 & 5
        } else if (i % 15 == 0){
            outty += "FizzBuzz ";
        // multiple of 7
        } else if (i % 7 == 0){
            outty += "Boom ";
        // remainder of 5
        } else if (i % 5 == 0){
            outty += "Buzz ";
        // remainder of 3
        } else if (i % 3 == 0){
            outty += "Fizz ";
        } else {
            outty += i + " ";
        }
    }
    return outty;
}
var oneLongString = fizzBuzz();
$("#output").html (oneLongString);

// or we could 

// Make it so the output of your program appears in your output div. 
//$("#output").append("<p>" + oneLongString + "</p>");
*/