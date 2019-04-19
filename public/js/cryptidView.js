var descriptionSize = "small";
var imageSize = "small";
var scpSize = "small";
var forumSize = "small";

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

//change the imageBox to enlarge the actual image instead of the div
$(".imageBox").click(function() {
  if (imageSize === "small") {
    $(".imageBox").css("height", "80%");
    $(".imageBox").css("transition", "1s");
    $("img").css("max-height", "800px");
    $("img").css("height", "100%");
    $("img").css("max-width", "500px");
    $("img").css("width", "500px");
    $("img").css("margin-left", "0px");

    imageSize = "large";
    console.log("enlarging image div");
  } else if (imageSize === "large") {
    $(".imageBox").css("height", "auto");
    $(".imageBox").css("transition", "1s");
    imageSize = "small";
    console.log("shrinking image div");
  }
});

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

//when we open the forumBox, we will fill the box with our posts
