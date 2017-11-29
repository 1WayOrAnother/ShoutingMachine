$(document).ready(function() {
  $("#form").submit(function(event) {
    var personInput = $("input#person").val().toUpperCase();
    //var personCap = $("personInput").toUpperCase();

    $(".person").text(personInput);

    $("#letter").show();

    event.preventDefault();
  });
});
