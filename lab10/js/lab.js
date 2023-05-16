// index.js - Lab 10: JavaScript Events and Forms
// Author: Shelby Decker
// Date: 5/16/23

// 1. borrow the nameSort()) fxn or anagram() function from lab7
// 2. attaach an event listener to your button that does the following:
    // - gets the value of your input field
    // - runs that value through your sort() or anagram() fxn and saves the results
    // = repalces the html in <div id=outut> with the results
var ibutton = document.getElementById("my-button");
ibutton.addEventListener("click", function(){
    // grabbing the value of the name entered in the input box
    var inputValue = document.getElementById("user-name").value;
    // split the entered name to sort
    var newInput = inputValue.split("");
    // sort the split name
    newInput.sort();
    // create a new paragraph element for the html doc
    var newEl = document.createElement("p");
    // join the name and set it to the element's label
    newEl.innerHTML = newInput.join("");
    // append the new paragraph element to the doc
    document.getElementById("output").appendChild(newEl);
});