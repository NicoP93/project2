var descriptionSize = "small";
var scpSize = "small";
var forumSize = "small";
//var imageSize = "small";

$(".descriptionBox").click(function() {
  if (descriptionSize === "small") {
    $(".descriptionBox").css("height", "auto");
    $(".descriptionBox").css("transition", "1s");
    descriptionSize = "large";
    console.log("enlarging description div");
  } else if (descriptionSize === "large") {
    $(".descriptionBox").css("height", "100px");
    $(".descriptionBox").css("transition", "1s");
    descriptionSize = "small";
    console.log("shrinking description div");
  }
});

//resizing image code (not working well)
/*
$(".imageBox").click(function() {
  if (imageSize === "small") {
    $("img").css("width", "100%");
    
    $(".imageBox").css("height", "80%");
    $(".imageBox").css("transition", "1s");
    $("img").css("max-height", "auto");
    $("img").css("height", "100%");
    $("img").css("max-width", "620px");
    $("img").css("width", "620px");
    $("img").css("margin", "0 auto");
    $("img").css("width", "80em");
    $("img").css("transition", "1s");
    $(".imageBox").css("height", "auto");


    imageSize = "large";
    console.log("enlarging image div");
  } else if (imageSize === "large") {
    $(".imageBox").css("height", "auto");
    $(".imageBox").css("transition", "1s");
    imageSize = "small";
    console.log("shrinking image div");
  }
});
*/

$(".scpBox").click(function() {
  if (scpSize === "small") {
    $(".scpBox").css("height", "auto");
    $(".scpBox").css("transition", "1s");
    scpSize = "large";
    console.log("enlarging scp div");
  } else if (scpSize === "large") {
    $(".scpBox").css("height", "100px");
    $(".scpBox").css("transition", "1s");
    scpSize = "small";
    console.log("shrinking scp div");
  }
});

$(".forumBox").click(function() {
  if (forumSize === "small") {
    $(".forumBox").css("height", "80%");
    $(".forumBox").css("transition", "1s");
    forumSize = "large";
    console.log("enlarging forum div");
  } else if (forumSize === "large") {
    $(".forumBox").css("height", "75px");
    $(".forumBox").css("transition", "1s");
    forumSize = "small";
    console.log("shrinking forum div");
  }
});

// $("#post").click(function () {
//   event.preventDefault();

//   var newPost = addPost();
//   console.log("new post:" + newPost);
//   $.ajax("api/post/add", {
//     type: "POST",
//     data: newPost
//   }).then(function () {
//     //this reloads the cryptid-view page with the id from before
//     window.location.replace("/cryptid-view/" + window.location.split("/")[3]);
//   });
// });

