// index.js - Lab 6: Arrays & Objects
// Author: Shelby Decker
// Due Date: 5/2/23 7:00a

// Arrays/Objects

var myTransport = ['feet', 'car', 'bus', 'skateboard'];
var myMainRide = {
  make: "Fiat", 
  mode: "500 Sport",
  year: 2012,
  color: "red",
  currentYear: 2023,
  age: function() {
    return this.currentYear - this.age;
  } 
};

// output
document.writeln("Getting around: " + myTransport[0], ", " + myTransport[1] + ", " + myTransport[2] + ", " + myTransport[3] + "<br>");
// this little trick allows us to write an object to the document
document.writeln("My Main Ride: <pre>", JSON.stringify(myMainRide, null, '\t'), "</pre>");
/*
// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main(); */
