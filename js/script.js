$(document).ready(function() {
  $("form#youScream").submit(function(event) {
    var fieldNames = [1,2,3,4];
    var sortedList = [];

    fieldNames.forEach(function(fieldName) {
      sortedList.push($("#flavor" + fieldName).val().toUpperCase());
    });
    sortedList.sort();

    sortedList.forEach(function(sortedItem) {
      var flavor = "<li>" + sortedItem + "</li>";
      $("#flavorFavs").append(flavor);
    });

    event.preventDefault();
  });



});
