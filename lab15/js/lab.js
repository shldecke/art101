// index.js - Lab 15: AJAX
// Author: Shelby Decker
// Date: 6/1/23

// today we will be trying to connect with an API
function getStuff(){
    $.ajax({
        // URL
        url: "https://yesno.wtf/api",
        // data to be sent
        data: {},
        type: "GET" 
    })
    .done(function(data){
        console.log(data.answer);
        console.log(data.image);
        $("#output").html("<h2>${data.answer}</h2><img src='${data.image}'>"); 
        //$("#output").html += "<img src=" + data.image + ">";
        })
    .fail(function(jqXHR, textStatus, errorThrown){
        console.log("Error: ", textStatus, errorThrown);
        })
}

$("#activate").click(getStuff());