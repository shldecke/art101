// index.js - Lab 12: Conditionals
// Author: Shelby Decker
// Date: 5/23/23


// function() return Gryffindor, Ravenclaw, Slytherin, or Hufflepuff depending on 
// result of mod
function sortingHat(str){
    len = str.length;
    mod = len % 4;
    if (mod == 0){
        return "Gryffindor";
    } else if (mod == 1){
        return "Ravenclaw";
    } else if (mod == 2){
        return "Slytherin";
    }else if (mod == 3){
        return "Hufflepuff";
    }
}
// getting the button and storing it in "myButton"
var myButton = document.getElementById("button");
// assigning a function to myButton
myButton.addEventListener("click", function(){
    var name = document.getElementById("input").value;
    var house = sortingHat(name);
    newText = "<p>Congratulations, the Sorting Hat has placed you into " + house + ".</p>"
    //newText.style.fontFamily = fantasy;
    document.getElementById("output").innerHTML = newText;

});
