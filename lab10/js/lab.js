// index.js - Lab 10: JavaScript Events and Forms
// Author: Shelby Decker
// Date: 5/11/23

// 1. borrow the nameSort()) fxn or anagram() function from lab7
// 2. attaach an event listener to your button that does the following:
    // - gets the value of your input field
    // - runs that value through your sort() or anagram() fxn and saves the results
    // = repalces the html in <div id=outut> with the results
var ibutton = document.getElementById("my-button");
ibutton.addEventListener("click", function(){
    var inputValue = document.getElementById("user-name").value;
    var newInput = inputValue.split("");
    newInput.sort();
    var newEl = document.createElement("p");
    newEl.innerHTML = newInput.join("");
    document.getElementById("output").appendChild(newEl);
});