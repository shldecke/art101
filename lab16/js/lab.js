// index.js - Lab 16: JSON and APIs
// Author: Shelby Decker
// Date: 6/6/23

// uses .ajax to retreive data and store object in a variable comicObj
// - give the section a title using the comicObj.title key from the object
// - create an image tag using comicObj.img key 
// - give the image an alt and title attributes using the comicObj.alt key

$.ajax({
    // URL
    url: "https://xkcd.com/614/info.0.json",  // delete /614/
    // data to be sent
    data: {},
    type: "GET",
    dataType: "application/json" 
})
.done(function(data){
    //console.log(data.answer);
    //console.log(data.image);
    var comicObj = data;
    $("#output").html("our comicObj: ", JSON.stringify(comicObj));
        //.html("<h2>${data.answer}</h2><img src='${data.image}'>"); 
        //$("#output").html += "<img src=" + data.image + ">";
    })
.fail(function(jqXHR, textStatus, errorThrown){
    console.log("Error: ", textStatus, errorThrown);
    })
