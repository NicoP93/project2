$("#search").click(function (event) {
  event.preventDefault();

  var searchInput = $("#search-input").val();
  var searchClass = $("#search-class").val();
  console.log(searchInput + searchClass);


});