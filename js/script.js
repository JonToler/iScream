$(document).ready(function() {
  $("form#youScream").submit(function(event) {
    var fieldNames = [1,2,3,4];

    fieldNames.forEach(function(fieldName) {
      var flavor = "<li>" + $("#flavor" + fieldName).val() + "</li>";
      $("#flavorFavs").append(flavor);
    })

    event.preventDefault();
  });



});
