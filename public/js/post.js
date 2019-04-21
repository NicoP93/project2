var valid = "";

function validateForm() {
  //assign vars to div values
  var a = $("#userPost").val();

  if (!a) {
    $(".invalid").empty();
    $(".invalid").append("<p>You gotta say something, man.</p>");
    valid = false;
  } else {
    $(".invalid").empty();
    valid = true;
  }
}

$("#add").click(function () {
  event.preventDefault();
  validateForm();
  var newPost = addPost();
  var thisId = $("#idPost").text();
  console.log(thisId);
  debugger;
  console.log("new post:" + newPost);
  $.ajax("/api/posts/add/" + thisId, {
    type: "POST",
    data: newPost
  }).then(function () {
    //this reloads the cryptid-view page with the id from before
    window.location.replace("/cryptid-view/" + $("#idPost").text());
  });
});

function addPost() {
  if (valid === true) {
    console.log($("#idPost").text());
    var cryptidId = $("#idPost").text();
    console.log(cryptidId);
    var newPost = {
      author: "Anonymous",
      body: $("#userPost").val(),
      CryptidId: cryptidId
    };
    return newPost;
  }
}