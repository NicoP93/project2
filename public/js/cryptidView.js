var descriptionSize = "small";
var imageSize = "small";
var scpSize = "small";

$(".descriptionBox").click(function() {
  if (descriptionSize === "small") {
    $(".descriptionBox").css("height", "80%");
    $(".descriptionBox").css("transition", "1s");
    descriptionSize = "large";
    console.log("enlarging description div");
  } else if (descriptionSize === "large") {
    $(".descriptionBox").css("height", "200px");
    $(".descriptionBox").css("transition", "1s");
    descriptionSize = "small";
    console.log("shrinking description div");
  }
});

$(".imageBox").click(function() {
  if (imageSize === "small") {
    $(".imageBox").css("height", "80%");
    $(".imageBox").css("transition", "1s");
    imageSize = "large";
    console.log("enlarging image div");
  } else if (imageSize === "large") {
    $(".imageBox").css("height", "300px");
    $(".imageBox").css("transition", "1s");
    imageSize = "small";
    console.log("shrinking image div");
  }
});

$(".scpBox").click(function() {
  if (scpSize === "small") {
    $(".scpBox").css("height", "80%");
    $(".scpBox").css("transition", "1s");
    scpSize = "large";
    console.log("enlarging scp div");
  } else if (scpSize === "large") {
    $(".scpBox").css("height", "150px");
    $(".scpBox").css("transition", "1s");
    scpSize = "small";
    console.log("shrinking scp div");
  }
});
