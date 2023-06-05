// index.js - Lab 16: JSON and APIs
// Author: Shelby Decker
// Date: 6/6/23

// uses .ajax to retreive data and store object in a variable comicObj
// - give the section a title using the comicObj.title key from the object
// - create an image tag using comicObj.img key 
// - give the image an alt and title attributes using the comicObj.alt key

$.ajax({
    // URL
    url: "https://xkcd.com/info.0.json",  // delete /614/
    // data to be sent
    data: {},
    type: "GET",
    dataType: "application/json" 
})
.done(function(comicObj){
    console.log(JSON.stringify(comicObj));
    console.log("success!!");
    //var comicObja = JSON.stringify(comicObj);
    //console.log("stringify works");
    //var comicObj = data;
    //console.log("we passed the comicObj assign line");
    //console.log(comicObja);
    //console.log(comicObj.title);
    // //var comicObj = JSON.stringify(data);
    // //$("#output").html("our comicObj: " + comicObj);
    // $("#output").html("<h2> " + data.title);
    // console.log("printing the header");
    // $("#output").append("<img src='" + data.img + "'/>");
    // $("#output").append("<p>alt: " + data.alt );
    })
.fail(function(jqXHR, textStatus, errorThrown){
    console.log("Error: ", textStatus, errorThrown);
    })

    // trying only stringify and pulling data from data's attributes