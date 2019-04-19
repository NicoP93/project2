var valid = "";

function validateForm() {
  //assign vars to div values
  var a = $("userPost").val();

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
  console.log("new post:" + newPost);
  $.ajax("api/post/add", {
    type: "POST",
    data: newPost
  }).then(function () {
    //this reloads the cryptid-view page with the id from before
    window.location.replace("/cryptid-view/" + window.location.split("/")[3]);
  });
});

function addPost() {
  if (valid === true) {
    console.log(window.location.split("/")[3]);
    var cryptidId = window.location.split("/")[3];
    var newPost = {
      author: "Anonymous",
      body: $("#userPost").val(),
      CryptidId: cryptidId
    };
    return newPost;
  }
}