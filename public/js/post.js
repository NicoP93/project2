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
        //need to put something here to go back to the cryptid page
        //we need to keep track of the cryptid we came from
        location.reload();
    });
});

function addPost() {
    if (valid === true) {
        var newPost = {
            author: "Anonymous",
            body: $("#userPost").val(),
//            CryptidId : 
        };
        return (newPost)
    }
}