var valid = "";

function validateForm() {
  //assign vars to div values
  var a = $("#name").val();
  var b = $("#number").val();
  var c = $("#select-class").val();
  var d = $("#procedures").val();
  var e = $("#description").val();
  var f = $("#page-url").val();
  var g = $("#img-url").val();

  if (!a || !b || !c || !d || !e || !f || !g) {
    $(".invalid").empty();
    $(".invalid").append("<p>Please complete all fields.</p>");
    valid = false;
  } else {
    $(".invalid").empty();
    valid = true;
  }
}

$("#add").click(function() {
  event.preventDefault();
  validateForm();
  var newCryptid = addSpecimen();
  console.log(newCryptid);
  $.ajax("/api/cryptid/add", {
    type: "POST",
    data: newCryptid
  }).then(function() {
    console.log("created = new cryptid");
    location.reload();
  });
});

// $("#submit").click(function() {
//   event.preventDefault();
//   validateForm();
//   $.ajax("/api/cryptid", {
//     type: "GET",
//     data: Cryptid
//   }).then(function() {
//     console.log("fetched cryptids");
//     location.reload();
//   });
// });

function addSpecimen() {
  if (valid === true) {
    var newSpecimen = {
      name: $("#name").val(),
      itemNum: $("#number").val(),
      objClass: $("#select-class").val(),
      description: $("#description").val(),
      procedures: $("#procedures").val(),
      pageUrl: $("#page-url").val(),
      imgUrl: $("#img-url").val()
    };
    return newSpecimen;
  }
  console.log(newSpecimen);
}
